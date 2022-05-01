<?php

namespace App\Controllers;


use App\Models\ElevesModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class ElevesController extends ResourceController
{
    public function __construct(){
        $this->db = \Config\Database::connect();
    }
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    use ResponseTrait;
    public function index()
    {
        // find all the data 
        if($this->request->getMethod() == 'get'){
            $model = new ElevesModel();
            $data = $model->findAll();
            return $this->respond($data);
        }
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function afficher_simple_eleve($id = null)
    {
        $model = new ElevesModel();
        $data = $model->find(['num_inscription'=> $id]);
        if(!$data) return $this->FailNotFound("donnee introuvable");
        return $this->respond($data[0]);
    }

    public function showCount($id = null)
    {
        $builder = $this->db->table('eleves');
        $builder->selectCount('nom')->where('id_president', $id);
        $query = $builder->get()->getRowArray();
        return $this->respond($query);
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function creerEleve()
    {

        // message de validation
        $rules = [
            'nom' => "required",
            'prenom' => "required",
            'date_naissance' => "required",
            'adresse' => "required",
            'CIN' => "required",
            'num_telephone' => "required",
        ];

        // donnee passee au requete
        $data = [
            'nom' => $this->request->getVar('nom'),
            'prenom' => $this->request->getVar('prenom'),
            'date_naissance' => $this->request->getVar('date_naissance'),
            'adresse' =>$this->request->getVar('adresse'),
            'CIN' => $this->request->getVar('CIN'),
            'num_telephone' => $this->request->getVar('num_telephone'),
            'photo' => $this->request->getVar('photo'),
            'isAdmin' => $this->request->getVar('isAdmin'),
        ];

        $validation = \Config\Services::validation();

        if(!$this->validate($rules)) {
            $response = [
                'status'=> 400,
                'message'=> [
                    'error'=> "Completez d'abord la formulaire",
                ],
            ];
            return $this->respond($response);
            
        } else {
            // creer un eleve
            $model = new ElevesModel();
            $eleve = $model->insert($data);
    
            $response = [
                'status'=> 201,
                'error'=> null,
                'messages'=> [
                    'success'=> "saisissez maintenant votre mot de passe !"
                ],
                'data' => $eleve
            ];
            
            return $this->respondCreated($response);
        }
        
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function signup($id = null)
    {
        //  deuxieme requete pour enregistrer l'email et le mot de passe, dans un autre page
        // chiffrer le mot de passe avant de l'enregistrer dans la base de donnee
        $data = [
            'email' => $this->request->getVar('email'),
            'password' => password_hash($this->request->getVar('password'), PASSWORD_DEFAULT),
        ];

        // validation
        $rules = [
            'email' => "required",
            'password' => "required"
        ];

        $messages = [
            "email" => [
                "required" => "completez l'email",
            ],
            "password" => "completez le mot de passe"
        ];
    
        $validation = \Config\Services::validation();

         if(!$this->validate($rules, $messages)) {
            $response = [
                'status'=> 400,
                'message'=> [
                    'error'=> "veuillez completez d'abord la formulaire"
                ]
            ];
            return $this->respond($response);

         }else {  
            // modifier un eleve
            $model = new ElevesModel();
            $eleve = $model->update($id, $data);
    
            $response = [
                'status'=> 201,
                'error'=> null,
                'message'=> [
                    'success'=> "Bravo, voter pour vos candidat !"
                ]
            ];
            
            return $this->respond($response);
         }
        
    }

    public function signin()
    {
        $model = new ElevesModel();
        $data = [
            'email' => $this->request->getVar('email'),
            'password' => $this->request->getVar('password')
        ];

        $rules = [
            'email' => "required",
            'password' => "required"
        ];

        $messages = [
            "email" => [
                "required" => "completez l'email",
            ],
            "password" => "completez le mot de passe"
        ];

        if(!$this->validate($rules, $messages)) {
            $response = [
                'status'=> 400,
                'message'=> [
                    'error'=> "veuillez completez d'abord la formulaire"
                ]
            ];
            return $this->respond($response);

         } else {
       
        // comparer l'email
            $findEmail = $model->where('email', $data['email'])->first();
            if(!$findEmail){
                $response = [
                    'status' => 404,
                    'message' => [
                        'error' => "cet email n'existe pas"
                    ]
                    ];
                return $this->respond($response);
            } else {
                // verifier le mot de passe
                $findUser = $findEmail['password'];
                $comparePassword = password_verify($data['password'], $findUser);
    
                if(!$comparePassword){
                    $response = [
                        'status' => 404,
                        'message' => [
                            'error' => "mot de passe incorrect"
                        ]
                        ];
                    return $this->respond($response);
                } else {
                    // creer un token pour l'eleve
                    $key = "jwt_secret";
                    $payload = array(
                        "iss" => "localhost",
                        "aud" => "localhost",
                        "data" => [
                            'num_inscription' => $findEmail['num_inscription'],
                            'nom' => $findEmail['nom'],
                            'prenom' => $findEmail['prenom'],
                            'isAdmin' => $findEmail['isAdmin']
                        ]
                    );
                    $jwt = JWT::encode($payload, $key, 'HS256');
    
                    $response = [
                        'status' => 201,
                        'jwt' => $jwt,
                        'message' => [
                            'success' => "vous etes actuellement connectee"
                        ],
                        'data' => $payload['data']
                    ];
                    return $this->respond($response);
                }
            }
         }        
    }

    public function afficherEleve()
    {
        // afficher l'information de l'eleve via le token correspondant
        $request = service('request');
        $key = "jwt_secret";
        $headers = $request->getHeader("authorization");
        $jwt = $headers->getValueLine();
        $eleves = JWT::decode($jwt, new Key($key, 'HS256'));
        return $this->respond([
            'status' => 200,
            'eleve' => $eleves->data
        ]);
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function supprimerEleve($id = null)
    {
        //
        $model = new ElevesModel();
        $data = $model->find(['num_inscription'=> $id]);
        if(!$data) return $this->FailNotFound("donnee introuvable");

        $model->delete($id);

        $response = [
            'status'=> 201,
            'error'=> null,
            'messages'=> [
                'success'=> "supprimee avec succes"
            ]
        ];
        
        return $this->respond($response);
    }

    public function modifier_id_president($id = null) 
    {
        $data = $this->request->getVar('id_president');

        $model = new ElevesModel();
        $query ="update eleves set id_president=$data where num_inscription = $id";

        $data = $this->db->query($query);
            return $this->respond($data);
    }
}
