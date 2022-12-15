import React, {useState} from 'react';
import Login from './Login';
import './Signup.css';

function Signup(){

    const [ischange,setIschange] = useState(false);

    const newHandler = () => {
        setIschange(true);
    }


    return(
        <div className='main'>
            {ischange === false ?
            <>
             <header className='header'>
                <h1>facebook</h1>
            </header> 
            <form className="signup-form">
                <div className='form-heading'>
                    <h2>Ceate a new account</h2>
                    <p>It's quick and easy</p>
                </div>
        
    
                <section className='input-field'>
                    <input type="text" placeholder='First name' id = 'new-user' required/>
                    <input type="text" placeholder='Surname' id = 'new-sur-name' required/>
                    <input type="email/number" placeholder='Moibile number or email address' id = 'email' required/><br/>
                    <input type="password" placeholder='New password' id = 'new-password' required/><br></br>
                </section> 

                <span id='dob'>Date of birth ?</span><br/>
                <select id ='day' title='Day'>
                    <option required>Day</option>
                    <option value='1'>01</option>
                    <option value='2'>02</option>
                    <option value='3'>03</option>
                    <option value='4'>04</option>
                    <option value='5'>05</option>
                    <option value='6'>06</option>
                    <option value='7'>07</option>
                    <option value='8'>08</option>
                    <option value='9'>09</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                    <option value='31'>31</option>
                </select>

                <select id='month' name='Month'>
                    <option required>Month</option>
                    <option value='1'>Jan</option>
                    <option value='2'>Feb</option>
                    <option value='3'>Mar</option>
                    <option value='4'>Apr</option>
                    <option value='5'>May</option>
                    <option value='6'>Jun</option>
                    <option value='7'>Jul</option>
                    <option value='8'>Aug</option>
                    <option value='9'>Sep</option>
                    <option value='10'>Oct</option>
                    <option value='11'>Nov</option>
                    <option value='12'>Dec</option>
                </select>
                <select id="year" name="year">
                    <option required>year</option>
                    <option value="1940">1940</option>
                    <option value="1941">1941</option>
                    <option value="1942">1942</option>
                    <option value="1943">1943</option>
                    <option value="1944">1944</option>
                    <option value="1945">1945</option>
                    <option value="1946">1946</option>                       
                    <option value="1947">1947</option>
                    <option value="1948">1948</option>
                    <option value="1949">1949</option>
                    <option value="1950">1950</option>
                    <option value="1951">1951</option>
                    <option value="1952">1952</option>
                    <option value="1953">1953</option>
                    <option value="1954">1954</option>
                    <option value="1955">1955</option>
                    <option value="1956">1956</option>
                    <option value="1957">1957</option>
                    <option value="1958">1958</option>
                    <option value="1959">1959</option>
                    <option value="1960">1960</option>
                    <option value="1961">1961</option>
                    <option value="1962">1962</option>
                    <option value="1963">1963</option>
                    <option value="1964">1964</option>
                    <option value="1965">1965</option>
                    <option value="1966">1966</option>
                    <option value="1967">1967</option>
                    <option value="1968">1968</option>
                    <option value="1969">1969</option>
                    <option value="1970">1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1989">1990</option>
                    <option value="1989">1991</option>
                    <option value="1989">1992</option>
                    <option value="1989">1993</option>
                    <option value="1989">1994</option>
                    <option value="1989">1995</option>
                    <option value="1989">1996</option>
                    <option value="1989">1997</option>
                    <option value="1989">1998</option>
                    <option value="1989">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select> 

                <span id='gender'>Gender</span>
                <div id='check-box'>
                    <div className='check-box'>
                        <label for='female' id='female-label'>Female</label>
                        <input type='radio' id="female" name='female'/>
                    </div>

                    <div className='check-box'>
                        <label for='male' id='male-label'>Male</label>
                        <input type='radio' id="male" name='male'/>
                    </div>

                    <div className='check-box'>
                        <label for='Custom' id='custom-label'>Custom</label>
                        <input type='radio' id="custom" name='custom'/>
                    </div>
        
                </div>

                <div class="paragraph">
                    <p>
                    People who use our service may have uploaded your contact information to Facebook. <a>Learn more.</a><br></br><br></br>

                    By clicking Sign Up, you agree to our <a>Terms, Privacy Policy <span>and</span> Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                    </p>
                </div>

                <div className='button'>
                    <button id='signup-btn'>Sign Up</button>
                </div>

                <span id='login' onClick={newHandler}>Already have an account?</span>
            </form></>
            : <Login/>}
        </div>
    )
}

export default Signup;