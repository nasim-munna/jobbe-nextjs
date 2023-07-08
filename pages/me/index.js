import Layout from "@/components/layout/Layout"
import UpdateProfile from "../../components/user/UpdateProfile";
import { isAuthenticatedUser } from "../../utils/isAuthenticated";

export default function index({access_token}) {
  
  return (
    <Layout title="Upader Your Profile">
      <UpdateProfile access_token={access_token}/>
    </Layout>
    
  )
}

export async function getServerSideProps({ req }) {
    const access_token = req.cookies.access;
  
    const user = await isAuthenticatedUser(access_token);
  
    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        access_token,
      },
    };
  }
