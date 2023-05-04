import React, { useContext } from 'react';
import { ServiceContactComponentProps } from './ServiceContact.types';
import * as Styles from './ServiceContact.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import WebsiteIcon from '../../components/icons/WebsiteIcon/WebsiteIcon';
import EmailIcon from '../../components/icons/EmailIcon/EmailIcon';
import PhoneIcon from '../../components/icons/PhoneIcon/PhoneIcon';
import { ThemeContext } from 'styled-components';

const ServiceContact: React.FunctionComponent<ServiceContactComponentProps> = ({ website, email, contacts }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Styles.Container data-testid="ServiceContact">
      <Row>
        {website && (
          <Column small="full" medium="one-half" large="one-third" classes="striped-contacts">
            <Styles.IconContainer>
              <WebsiteIcon colourFill={themeContext.theme_vars.colours.black} />
            </Styles.IconContainer>
            <Styles.Content>
              <a href={website}>{website}</a>
            </Styles.Content>
          </Column>
        )}
        {email && (
          <Column small="full" medium="one-half" large="one-third" classes="striped-contacts">
            <Styles.IconContainer>
              <EmailIcon colourFill={themeContext.theme_vars.colours.black} />
            </Styles.IconContainer>
            <Styles.Content>
              <a href={`mailto:${email}`}>{email}</a>
            </Styles.Content>
          </Column>
        )}
        {contacts?.length > 0 && (
          <Column small="full" medium="one-half" large="one-third" classes="striped-contacts">
            <Styles.IconContainer>
              <PhoneIcon colourFill={themeContext.theme_vars.colours.black} />
            </Styles.IconContainer>
            <Styles.Content>
              {contacts.map((contact) => (
                <Styles.Contact key={contact.id}>
                  {contact.name && <Styles.ContactName>{contact.name}</Styles.ContactName>}
                  {contact.phones.map((phone, phoneIndex) => (
                    <Styles.ContactLink href={`tel:${phone.number}`} key={phoneIndex}>
                      {phone.number}
                    </Styles.ContactLink>
                  ))}
                </Styles.Contact>
              ))}
            </Styles.Content>
          </Column>
        )}
      </Row>
    </Styles.Container>
  );
};

export default ServiceContact;
