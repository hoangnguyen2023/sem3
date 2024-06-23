import React from 'react'

const FormApplyJob = () => {
    return (
        <div className='d-flex justify-content-center' >

            <div className="card  col-lg-8 mx-2 my-5" style={{border:"none"}}>
                <h2 className='text-center my-5'>(Senior) AI Engineer, KiLM</h2>

                <div className="card-header text-center">
                    Information ApplyCant
                </div>
                <div className="card-body">
                    <h5 className="card-title my-2">Profile Person</h5>
                    <div className="input-group flex-nowrap my-5">
                        <span className="input-group-text " id="addon-wrapping">Full Name</span>
                        <input type="text" className="form-control" name="Username" required />
                    </div>


                    <div className="input-group flex-nowrap my-5">
                        <span className="input-group-text  " id="addon-wrapping">Day of Birth</span>

                        <select className="form-select mx-5" id="inputGroupSelect01">
                            <option selected>Day...</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>

                        </select>
                        <select className="form-select mx-5" id="inputGroupSelect02">
                            <option selected>Month...</option>
                            <option value={1}>January</option>
                            <option value={2}>February</option>
                            <option value={3}>March</option>
                            <option value={4}>Apirl</option>
                            <option value={5}>May</option>
                            <option value={6}>June</option>
                            <option value={7}>July</option>
                            <option value={8}>August</option>
                            <option value={9}>September</option>
                            <option value={10}>October</option>
                            <option value={11}>November</option>
                            <option value={12}>December</option>
                        </select>
                        <select className="form-select ms-5" id="inputGroupSelect03">
                            <option selected>Year...</option>
                            <option value={2024}>2024</option>
                            <option value={2023}>2023</option>
                            <option value={2022}>2022</option>
                            <option value={2024}>2021</option>
                            <option value={2023}>2020</option>
                            <option value={2022}>2019</option>
                            <option value={2024}>2018</option>
                            <option value={2023}>2017</option>
                            <option value={2022}>2016</option>
                            <option value={2024}>2015</option>
                            <option value={2023}>2014</option>
                            <option value={2022}>2013</option>
                            <option value={2024}>2012</option>
                            <option value={2023}>2011</option>
                            <option value={2022}>2010</option>
                            <option value={2024}>2009</option>
                            <option value={2023}>2008</option>
                            <option value={2022}>2007</option>
                            <option value={2024}>2006</option>
                            <option value={2023}>2005</option>
                            <option value={2022}>2004</option>
                            <option value={2024}>2003</option>
                            <option value={2023}>2002</option>
                            <option value={2022}>2001</option>
                            <option value={2024}>2000</option>
                            <option value={2023}>1999</option>
                            <option value={2022}>1998</option>
                            <option value={2024}>1997</option>
                        </select>
                    </div>
                    <div className="input-group flex-nowrap my-5 ">
                        <input type="text" className="form-control me-5" name='email' required placeholder='@email' />
                        <input type="number" className="form-control ms-5" name='phone' required placeholder='Number Phone' />
                    </div>
                    <div className="input-group flex-nowrap my-5">
                        <span className="input-group-text  me-5 " id="addon-wrapping">Upload your CV (PDF format) (*)</span>
                        <input type="file" className="form-control" value='' name='file' required />
                    </div>
                    <div className="input-group my-5 ">
                        <span className="input-group-text">With textarea</span>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div>
                    <div className="input-group my-5 ">
                        <span className="input-group-text  " id="addon-wrapping">How did you hear about this position?</span>

                        <select className="form-select " id="inputGroupSelect01">
                            <option selected>Select</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>

                        </select>
                    </div>

                    <div className="d-flex justify-content-center">
                       <button className='btn btn-outline-primary' type='submit'>Submit</button>
                    </div>


                </div>

            </div>

            {/* <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form> */}


        </div>
    )
}

export default FormApplyJob
