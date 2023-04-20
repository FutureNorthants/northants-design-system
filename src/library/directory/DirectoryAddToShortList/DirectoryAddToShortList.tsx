import React, { useContext } from 'react';
import { DirectoryAddToShortListProps } from './DirectoryAddToShortList.types';
import * as Styles from './DirectoryAddToShortList.styles';
import { useDirectoryShortListContext } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import CloseIcon from '../../components/icons/CloseIcon/CloseIcon';
import HeartIcon from '../../components/icons/HeartIcon/HeartIcon';
import { ThemeContext } from 'styled-components';

const DirectoryAddToShortList: React.FunctionComponent<DirectoryAddToShortListProps> = ({
  id,
  name,
  snippet,
  email,
  website,
  phone,
}) => {
  const { toggleFavourites: toggleFavourites, isFavourite: isFavourite } = useDirectoryShortListContext();
  const themeContext = useContext(ThemeContext);
  const favourite = isFavourite(id);
  return (
    <Styles.AddToShortlist
      onClick={(e) => toggleFavourites(id, name, snippet, email, website, phone)}
      data-testid="DirectoryAddToShortList"
      favourite={favourite}
    >
      {favourite ? (
        <CloseIcon colourFill={themeContext.theme_vars.colours.negative} />
      ) : (
        <HeartIcon colourFill={themeContext.theme_vars.colours.action} />
      )}
      {favourite ? <>Remove from shortlist</> : <>Add to shortlist</>}
    </Styles.AddToShortlist>
  );
};

export default DirectoryAddToShortList;
