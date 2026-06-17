import { useIntersectionObserver } from '../../hooks';
import { Container, Section, SectionTitle, Badge } from '../common';

/**
 * Accreditation Section - Premium design
 * Displays trust and compliance points
 * Uses Intersection Observer for animation
 */
const AccreditationSection = () => {
  const { ref, hasBeenVisible } = useIntersectionObserver();

  const trustPoints = [
    'Independent counselling platform',
    'Course and eligibility guidance',
    'Transparent university comparison',
    'No guaranteed admission claims',
    'Student consent before contact',
    'Privacy-first lead handling',
  ];

  return (
    <Section variant="light" className="py-12 md:py-16">
      <Container>
        <div ref={ref}>
          <SectionTitle
            subtitle="Trust and Compliance"
            align="left"
            className="mb-8"
          />
          <div className="flex flex-wrap gap-4">
            {trustPoints.map((point, index) => (
              <div
                key={point}
                className={`transform transition-all duration-700 ${
                  hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Badge variant="accent" size="md">
                  ✓ {point}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AccreditationSection;
