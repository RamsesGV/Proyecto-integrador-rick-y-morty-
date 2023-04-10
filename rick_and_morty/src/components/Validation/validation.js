const validationF = (userData) => { 
    const errors = {}
    
        if (!/\S+@\S+\.\S+/.test(userData.email)) 
        errors.email = 'wrong email sintax.';
        if(userData.email === '') errors.email = 'Please, add your email.'
        if(userData.email.length >= 35) errors.email = 'the email cannot be longer than 35 characters'

        if(!/^(?=.*\d)[\w!@#$%^&*()-+=]{6,10}$/.test(userData.password)) errors.password = 'The password must be at least 1 number and between 6 and 10 characters'
return errors
    };
    export default validationF;
