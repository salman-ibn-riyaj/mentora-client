import CourseDetailsCard from "@/components/CourseDetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const CourseDetailPage = async({params}) => {
    const {id} = await params;
    console.log(id);

    const {token} = await auth.api.getToken({headers: await headers()});
    console.log(token)



    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses/${id}`,{
      headers: {
        "Authorization":`Bearer ${token}`
      }
    });
    const courseData = await res.json();
    console.log(courseData)
  return (
    <div className="py-5">
        <CourseDetailsCard courseData={courseData}></CourseDetailsCard>
    </div>
  )
}

export default CourseDetailPage