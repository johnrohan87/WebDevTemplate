import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './choose-us.style';

const ChooseUs = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        chooseUs {
          title
          description
          features {
            id
            title
            description
          }
          thumbnail {
            publicURL
          }
        }
      }
    }
  `);
  const {
    title,
    description,
    thumbnail,
    features,
  } = Data.appMinimalJson.chooseUs;
  return (
    <SectionWrapper>
      <Container>
        <ThumbWrapper>
          <Image src={thumbnail.publicURL} alt="Choose Thumbnail" />
        </ThumbWrapper>

        <TextWrapper>
          <SectionHeader className="section-header-two">
            <Heading content={title} />
            <Text content={description} />
          </SectionHeader>

          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={<Text as="span" content={'0' + item.id} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ChooseUs;
