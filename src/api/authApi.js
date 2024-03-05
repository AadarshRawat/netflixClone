// authApi.js
const signInUser = async ({email,password}) => {

    try {
      // Your API call logic for signing in the user
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:email,password:password}),
      });
  
      if (!response.ok) {
        throw new Error('Unable to sign in. Please check your credentials.');
      }
  
      const data = await response.json();
      // Process the response data as needed
  
      return data;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error; // Re-throw the error for handling in the component
    }
  };


const signUpUser = async ({email,password,username})=>{
    console.log(email,password,username)
    try{
        const response = await fetch('http://localhost:8000/signup/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:email,password:password,username:username}),
          });
          if(!response.ok){
            return new Error
          }

          else{
            return await response.json();
          }
    }
    catch(error){
        console.error('Error signing in:', error);
        throw error


    }

    
};

  
  export { signInUser,signUpUser };
  









//   fetch('http://localhost:8000/login/',{
//     method:'POST',
//     headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({email:email.current.value,password:password.current.value})
// }).then((resp)=>{
//     console.log('resp--->',resp)
//     setlogin(resp.ok)
//     resp.json().then((resp)=>{
//         console.log(resp)
//         setErrorMessage(resp.Message)
        
//     })
// })