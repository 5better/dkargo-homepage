import VerticalFeatureRow from './VerticalFeatureRow';
import Section from '@/components/layout/Section';
import Feature1 from 'public/assets/images/feature1.svg';
import Feature2 from 'public/assets/images/feature2.svg';
import Feature3 from 'public/assets/images/feature3.svg';

function VerticalFeatures() {
  return (
    <Section
      title="바뀌는지 보자구요"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
    >
      <VerticalFeatureRow
        title="Title Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image={<Feature1 />}
      />
      <VerticalFeatureRow
        title="Title Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image={<Feature2 />}
        reverse
      />
      <VerticalFeatureRow
        title="Title Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image={<Feature3 />}
      />
    </Section>
  );
}

export default VerticalFeatures;
