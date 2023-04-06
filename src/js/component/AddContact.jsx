import React from "react";

const AddContact = () => {
    return (
        <div className="container-fluid">
            <h1 className="fs-1 text-center py-4">Add Contact</h1>
            <div className="mb-3">
                <div className="mb-3 row">
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                <div className="col-sm-10">
                    <input className="form-control" id="inputName" placeholder="Your Name pls"/>
                </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail" placeholder="Your Email pls"/>
                </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="mb-3 row">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                <div className="col-sm-10">
                    <input type="phone" className="form-control" id="inputPhone" placeholder="Your Phone pls"/>
                </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="mb-3 row">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                <div className="col-sm-10">
                    <input type="address" className="form-control" id="inputAddress" placeholder="Your Address pls"/>
                </div>
                </div>
            </div>
            <div className="d-grid gap-3 py-4">
                <button className="btn btn-primary" type="button">Button</button>
                <a href="#" className="btn btn-link text-start w-25 m-0 p-0" tabIndex="-1" role="button">Back to Contacts</a>
            </div>

        </div>
    );
}

export default AddContact;

