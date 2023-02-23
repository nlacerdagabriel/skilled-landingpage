import { FaRunning } from "react-icons/fa";
import { Course } from "../../components/Course";
import { Container } from "./styles";

export const Courses = () => {
  return (
    <Container>
      <div>
        <div className="check-out">
          <p>Check out our most popular courses!</p>
        </div>
        <Course
          icon={<FaRunning />}
          title="Animation"
          description="Learn the latest animation techniques to create stunning motion design
        and captivate your audience."
        />
        <Course
          icon={<FaRunning />}
          title="Animation"
          description="Learn the latest animation techniques to create stunning motion design
        and captivate your audience."
        />
        <Course
          icon={<FaRunning />}
          title="Animation"
          description="Learn the latest animation techniques to create stunning motion design
        and captivate your audience."
        />
        <Course
          icon={<FaRunning />}
          title="Animation"
          description="Learn the latest animation techniques to create stunning motion design
        and captivate your audience."
        />
        <Course
          icon={<FaRunning />}
          title="Animation"
          description="Learn the latest animation techniques to create stunning motion design
        and captivate your audience."
        />
      </div>
    </Container>
  );
};
