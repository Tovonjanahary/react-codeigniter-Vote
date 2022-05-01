const Bootstrap = () => {
    return (
        <div>
            {/* heading tags */}
            <h1> ceci est un h1</h1>
            <h2> ceci est un h2</h2>
            <h3 className="h2"> h3 mais class h2</h3>

            {/* display heading */}
            <h1 className="display-1">display 1</h1>
            <h1 className="display-2">display 2</h1>
            <h1 className="display-6">display 5</h1>

            {/* lead text and alignment */}
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p className="lead">lead (Lorem ipsum dolor, sit amet c)</p>
            <p className="lead text-center">lead text-center</p>
            <p className="lead text-end">lead text-end</p>

            {/* text-decoration && font weight */}
            <p className="text-decoration-underline">text-decoration-underline</p>
            <p className="text-decoration-line-through">text-decoration-line-through</p>
            <p className="fw-bold">fw-bold</p>
            <small>small text</small>

            {/* margin and padding */}
            <div className="bg-primary m-1 p-1">big margin and padding</div>
            <div className="bg-primary m-5 p-5">big margin and padding</div>
            <div className="bg-secondary ms-4 ps-5">margin-start-4 padding-start-5</div>

            {/* borders */}
            <div className="px-2 py-4 mt-4 mb-4 mx-3 border">default border</div>
            <div className="px-2 py-4 mt-4 mb-4 mx-3 border rounded">default border rounded</div>
            <div className="px-2 py-4 mt-4 mb-4 mx-3 border rounded-pill">default border rounded-pill</div>
            <div className="px-2 py-4 mt-4 mb-4 mx-3 border-top border-end border-success">border-top border-end border-success</div>
            <div className="px-2 py-4 mt-4 mb-4 mx-3 border-top border-end border-danger border-5">border-top border-end border-danger border-5</div>

            {/* box shadow */}
            <div className="m-4 p-5 shadow-sm">small shadow</div>
            <div className="m-4 p-5 shadow">large shadow</div>

            {/* font-weight*/}

            {/* container */}
            <div className="container my-5">
                <p className='h3 lead'>normal container</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe obcaecati dicta vero quisquam laudantium, sunt placeat perferendis! Laboriosam minus facilis consequatur ipsam totam aut exercitationem? Incidunt suscipit doloremque veniam hic.</p>
            </div>
            <div className="container-fluid my-5">
                <p className='h3 lead'>fluid container</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe obcaecati dicta vero quisquam laudantium, sunt placeat perferendis! Laboriosam minus facilis consequatur ipsam totam aut exercitationem? Incidunt suscipit doloremque veniam hic.</p>
            </div>
            <div className="container-lg my-5">
                <p className='h3 lead'>100% width until lg screens, then container</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe obcaecati dicta vero quisquam laudantium, sunt placeat perferendis! Laboriosam minus facilis consequatur ipsam totam aut exercitationem? Incidunt suscipit doloremque veniam hic.</p>
            </div>
            <div className="container-xl my-5">
                <p className='h3 lead'>100% width until xl screens, then container</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe obcaecati dicta vero quisquam laudantium, sunt placeat perferendis! Laboriosam minus facilis consequatur ipsam totam aut exercitationem? Incidunt suscipit doloremque veniam hic.</p>
            </div>
        </div>
    )
}

export default Bootstrap;