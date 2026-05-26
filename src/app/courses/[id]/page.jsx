import CourseDetailsCard from "@/components/CourseDetailsCard";


const CourseDetailPage = async({params}) => {
    const {id} = await params;
    console.log(id);

    const res = await fetch(`http://localhost:5001/courses/${id}`);
    const courseData = await res.json();
    console.log(courseData)
  return (
    <div className="py-5">
        <CourseDetailsCard courseData={courseData}></CourseDetailsCard>
    </div>
  )
}

export default CourseDetailPage