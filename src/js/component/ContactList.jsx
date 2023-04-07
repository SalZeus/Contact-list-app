import React from "react";


const ContactList = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-end py-4 mb-2">
                    <button type="button" className="btn btn-success">Add a New Contact</button>
            </div>
            <div className="card w-100 mb-3">
                <div className="card-body d-flex border border-primary">
                    <div>
                        <div className="container-fluid overflow-hidden float-start flex-shrink-0">
                        <img className="rounded-circle" src="https://fastly.picsum.photos/id/758/200/200.jpg?hmac=uNGrAzLKg8Jmc7G9XT1alpHw2bbW64ysv9Sh3PnjCPA"/>
                        </div>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        <div className="d-grid">
                            <h5 className="card-title">Mikey</h5>
                            <i className="fa-solid fa-phone card-text text-secondary"> 5842 Hillcrest Rd</i>
                            <i className="fa-solid fa-phone card-text text-secondary"> (870) 288-4149</i>
                            <i className="fa-solid fa-phone card-text text-secondary"> mike.ana@example.com</i>
                        </div>
                        <div className="d-flex align-self-start float-end">
                            <i className="f p-2 card-text text-secondary">
                            <button type="button" className="btn fa-solid fa-phone" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            </button>
                            </i>
                            <i type="button" className="card-text text-secondary">
                            <button type="button" className="btn fa-solid fa-phone">
                            </button>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Hmm... not too fast!</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    If you delete this... shi's gonna go down m8
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Nah, dont wanna redo</button>
                    <button type="button" className="btn btn-primary">Yus, i'm fine</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        // Modal
        
        )
}





export default ContactList;
