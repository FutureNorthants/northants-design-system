import React from 'react';
import Heading from '../../components/Heading/Heading';
import { SBPadding } from '../../../../.storybook/SBPadding';
import BackToTop from '../../components/BackToTop/BackToTop';

interface QuickExitPageExample1Props {}

export const QuickExitPageExample1: React.FunctionComponent<QuickExitPageExample1Props> = ({}) => {
  return (
    <>
      <Heading level={2} text="Controlling behaviour" />
      Controlling behaviour is a range of acts performed by the abuser and designed to make their victim subordinate and
      / or dependent. These acts include but are not limited to: isolating the victim from sources of support exploiting
      the victim's resources and capacities for personal gain depriving the victim of the means needed for independence,
      resistance and escape regulating the victim's everyday behaviour
      <Heading level={2} text="Coercive behaviour" />
      Coercive behaviour is an act or a pattern of acts of assault, threats, humiliation and intimidation or other
      abuse.  It is used by the abuser to harm, punish, or frighten their victim.
      <Heading level={2} text="Physical and sexual abuse" />
      Physical abuse is the use of physical force against someone in a way that injures or endangers that person. The
      police have the power and authority to protect you from physical attack. Sexual abuse is a form of physical abuse.
      Forced sex, even by a spouse or intimate partner with whom you also have consensual sex, is an act of aggression
      and violence.
      <Heading level={2} text="Emotional or psychological abuse" />
      Just because you’re not battered and bruised doesn’t mean you’re not being abused. Unfortunately, emotional abuse
      is often minimised or overlooked – even by the person being abused. Emotional abuse includes verbal abuse such as
      yelling, name-calling, blaming, and shaming. Isolation, intimidation, and controlling behaviour also fall under
      emotional abuse.
      <Heading level={2} text="Stalking and harassment" />
      Stalking and harassment is when someone repeatedly behaves in a way that makes you feel scared, distressed or
      threatened. Stalking is a form of harassment, but the stalker will have an obsession with the person they're
      targeting and their repeated, unwanted behaviour can make the victim feel distressed or scared.
      <Heading level={2} text="Harmful practices" />
      Harmful 'traditional' practices are forms of violence which have been committed primarily against women and girls
      in communities and societies for so long that they are considered, or presented by perpetrators, as part of
      accepted 'cultural' practice. The most common are forced or early marriage, so called 'honour' based violence,
      female genital mutilation or cutting (FGM).
      <Heading level={2} text="Honour-based abuse" />
      Honour Based Abuse is a form of Domestic Abuse which is motivated by the abuser’s perception that a person has
      brought or may bring ‘dishonour’ or ‘shame’ to themselves, their family or the community. It can take many forms,
      and can be complex to identify, but centres around the idea of controlling individuals to make them behave in
      certain ways or subscribe to certain beliefs.
      <Heading level={2} text="Female genital mutilation (FGM)" />
      Female Genital mutilation (FGM), is defined by the World Health Organisation (WHO) as “all procedures that involve
      partial or total removal of the external female genitalia, or other injury to the female genital organs for
      non-medical reasons. The practice has no health benefits for girls and women and cause severe bleeding and
      problems urinating, and later cysts, infections, as well as complications in childbirth and increased risk of
      newborn deaths.”
    </>
  );
};
