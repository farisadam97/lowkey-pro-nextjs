import Container from '@mui/material/Container';
import FormRegister from '../../components/register/Register.component';
import Navbar from '../../components/navbar/Navbar.component';

export default function Login(){
    return(
        <>
        <Navbar />
        <Container maxWidth="xl">
            <h1>Lowkeys Register Page</h1>
            <Container maxWidth="lg">
                <FormRegister />
            </Container>
        </Container>
        </>
    )
}