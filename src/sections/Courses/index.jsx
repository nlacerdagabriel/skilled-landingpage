import { Course } from "../../components/Course";
import { Container } from "./styles";
import Animation from '../../assets/icon-animation.svg'
import Design from '../../assets/icon-design.svg'
import Photography from '../../assets/icon-photography.svg'
import CryptoI from '../../assets/icon-crypto.svg'
import Business from '../../assets/icon-business.svg'

export const Courses = () => {
  return (
    <Container>
      <div>
        <div className="check-out">
          <p>Check out our most popular courses!</p>
        </div>
        <Course
          icon={Animation}
          title="Animation"
          description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
        />
        <Course
          icon={Design}
          title="Design"
          description="Create beautiful, usable interfaces to help shape the future of how the web looks."
        />
        <Course
          icon={Photography}
          title="Photography"
          description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
        />
        <Course
          icon={CryptoI}
          title="Crypto"
          description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
        />
        <Course
          icon={Business}
          title="Business"
          description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
        />

      </div>
    </Container>
  );
};
