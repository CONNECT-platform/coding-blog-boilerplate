import { themedStyle } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core/transport';


export const AuthorStyle = /*#__PURE__*/themedStyle<CodedocTheme>(theme => ({
  author: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  avatar: {
    width: 48, height: 48,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: 48, 
    boxShadow: '0 2px 6px rgba(0, 0, 0, .25)',
    marginRight: 16,
  },
  texts: {
    flexGrow: 1,
    textDecoration: 'none',
  },
  name: {
    fontSize: 18,
  },
  date: {
    fontSize: 12,
    opacity: .5,
  }
}));