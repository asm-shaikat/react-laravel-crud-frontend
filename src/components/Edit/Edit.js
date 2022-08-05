import React from 'react';

const Edit = () => {
    return (
        <div>
            <form>
                <div className="form">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com"
                            
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="name" className="form-control" placeholder="Enter Name"
                            
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password"
                             
                            required
                        />
                    </div>
                    <button type="submit" className='btn btn-primary' >Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;