<?php

namespace App\Controllers;

use App\Models\CandidatModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class CandidatsController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    use ResponseTrait;
    public function afficherCandidat()
    {
        // rechercher tous les candidats president
        if($this->request->getMethod() == 'get'){
            $model = new CandidatModel();
            $data = $model->findAll();
            return $this->respond($data);
        }
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function afficher_un_president($id = null)
    {
        $model = new CandidatModel();
        $data = $model->find(['id_president'=> $id]);
        if(!$data) return $this->FailNotFound("donnee introuvable");
        return $this->respond($data[0]);
    }

    /**
     * Return a new resource object, with default properties
     *
     * @return mixed
     */
    public function new()
    {
        //
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function creerCandidat()
    {
        $rules = [
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required',
            'telephone' => 'required',
        ];

        $messages = [
            'nom' => [
                'required' => 'veuillez completez le nom'
            ],
            'prenom' => [
                'required' => 'veuillez completez le prenom'
            ],
            'email' => [
                'required' => 'veuillez completez le email'
            ],
            'telephone' => [
                'required' => 'veuillez completez le numero de telephone'
            ]
        ];

        $data = [
            'nom' => $this->request->getVar('nom'),
            'prenom' => $this->request->getVar('prenom'),
            'email' => $this->request->getVar('email'),
            'telephone' => $this->request->getVar('telephone'),
        ];

        $validation = \Config\Services::validation();

        if(!$this->validate($rules, $messages)) {
            // $errorMessage = $this->validator;
            $response = [
                'status'=> 400,
                'message'=> [
                    'error'=> "veuillez completez la formulaire",
                ],
            ];
            return $this->respond($response);
        } else {
            // creer un candidat president
            $model = new CandidatModel;
            $model->insert($data);

            $response = [
                'status'=> 201,
                'error'=> null,
                'messages'=> [
                    'success'=> " Candidat cree avec succes !"
                ],
                'data' => $model
            ];

            return $this->respondCreated($response);
        }
        
    }

    /**
     * Return the editable properties of a resource object
     *
     * @return mixed
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function modifier_president($id = null)
    {
        $rules = [
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required',
            'telephone' => 'required',
        ];

        $messages = [
            'nom' => [
                'required' => 'veuillez completez le nom'
            ],
            'prenom' => [
                'required' => 'veuillez completez le prenom'
            ],
            'email' => [
                'required' => 'veuillez completez le email'
            ],
            'telephone' => [
                'required' => 'veuillez completez le numero de telephone'
            ]
        ];

        $data = [
            'nom' => $this->request->getVar('nom'),
            'prenom' => $this->request->getVar('prenom'),
            'email' => $this->request->getVar('email'),
            'telephone' => $this->request->getVar('telephone'),
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
           $model = new CandidatModel();
           $eleve = $model->update($id, $data);
   
           $response = [
               'status'=> 201,
               'error'=> null,
               'message'=> [
                   'success'=> "modifiee avec success"
               ]
           ];
           
           return $this->respond($response);
        }
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function supprimerCandidat($id = null)
    {
        //
        $model = new CandidatModel();
        $data = $model->find(['id_president'=> $id]);
        if(!$data) return $this->FailNotFound("donnee introuvable");

        $model->delete($id);

        $response = [
            'status'=> 201,
            'error'=> null,
            'messages'=> [
                'success'=> "candidat supprimee avec succes"
            ]
        ];
        
        return $this->respond($response);
    }
}
