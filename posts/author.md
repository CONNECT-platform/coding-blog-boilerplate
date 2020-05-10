> :Hero src=https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1960&h=600&fit=crop&q=80, \
> target=desktop

> :Hero src=https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1280&h=800&fit=crop&q=80, \
> target=mobile

# Author Information

You can add author information to each page using `:Author` component:

```md
> :Author name=Jackie Chan, \
> avatar='https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_UY1200_CR117,0,630,1200_AL_.jpg', \
> date=Yesterday, \
> url=https://en.wikipedia.org/wiki/Jackie_Chan
```

<br>

> :Author name=Jackie Chan, \
> avatar='https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_UY1200_CR117,0,630,1200_AL_.jpg', \
> date=Yesterday, \
> url=https://en.wikipedia.org/wiki/Jackie_Chan

---

## Getting Info from GitHub

If your blog is hosted on GitHub, you can also fetch author info automatically using commit logs.
Simply configure your repo via `.codedoc/config.ts`:

```ts | .codedoc/config.ts

import { configuration, 
  DefaultMarkdownCustomComponents,
} from '@codedoc/core';

// ...


export const config = /*#__PURE__*/configuration({
  // ...
/*!*/  misc: {
/*!*/    github: {
/*!*/      repo: 'my-cool-blog',               // --> your repo's name
/*!*/      user: 'john-doe'                    // --> your repo's user name
/*!*/    }
/*!*/  }
});
```

<br>

And then just pass `src=github` to `:Author` component:

```md
> :Author src=github
```

<br>

> :Author src=github

> :ToCPrevNext