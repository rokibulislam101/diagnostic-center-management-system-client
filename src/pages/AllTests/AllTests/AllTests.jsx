import { Helmet } from "react-helmet-async"
import TestsDetails from "../TestsDetails/TestsDetails"
import TestsAppointment from "../TestsAppointment/TestsAppointment"


const AllTests = () => {
  return (
    <div>
      <Helmet>
        <title>All Tests</title>
      </Helmet>
      <TestsDetails></TestsDetails>
      <TestsAppointment></TestsAppointment>
    </div>
  )
}

export default AllTests
