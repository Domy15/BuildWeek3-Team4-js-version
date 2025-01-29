const Comments = ({id}) => {
    
    const getComments = async() => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' ,{
                header:{
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVjMDAxY2QyMjA3MTAwMTVkZTJmNTUiLCJpYXQiOjE3MzgxNjAxMTcsImV4cCI6MTczOTM2OTcxN30.25IKkY2JudekPfeU60ZBpDgarUKp-pV9xEgMYov4NiM'
                }
            });
            if (response.ok) {
                const data = response.json();
            } else {
                throw new Error("errore nell'acquisizione dei dati");
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <p>ciao</p>
    )
}

export default Comments;