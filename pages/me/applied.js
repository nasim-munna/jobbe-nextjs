import Layout from "@/components/layout/Layout"
// import UpdateProfile from "../../components/user/UpdateProfile";
import { isAuthenticatedUser } from "../../utils/isAuthenticated";
import axios from "axios";
import JobsApplied from "../../components/job/JobsApplied";

export default function JobsAppliedPage({jobs}) {
  console.log(jobs )
  return (
    <Layout title="My Applied Job">
      <JobsApplied jobs={jobs}/>
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
    const res = await axios.get(`${process.env.API_URL}/api/me/jobs/applied/`,{
        headers:{
            Authorization:`Bearer ${access_token}`
        }
    })
    const jobs = res.data 
  
    return {
      props: {
        jobs,
      },
    };
  }
