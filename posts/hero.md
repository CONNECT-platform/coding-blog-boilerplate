<br><br>

# Hero Images

You can add hero images using `:Hero` component. Checkout the code for this page
to see for example how the above hero image was created. It is also highly recommended
to checkout the [official docs for quoted component syntax](https://codedoc.cc/docs/markdown/overview#component-syntax)
.

Anyhow this is the code that produces this hero image:

```md
> :Hero \
> src='https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=2560&q=80'
>
> Photo by [Émile Perron](https://unsplash.com/@emilep)
> on [Unsplash](https://unsplash.com)
```

<br>

> :Hero \
> src='https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=2560&q=80'
>
> Photo by [Émile Perron](https://unsplash.com/@emilep)
> on [Unsplash](https://unsplash.com)

<br>

## Captions

The content you write under a hero image is used as its caption (as in the example outlined above).
You can also have hero images without a caption:

```md
> :Hero src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=2560&q=80'
```

<br>

> :Hero src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=2560&q=80'

<br>

## Dark Mode Support

You can specify whether a hero image is to be only used for dark mode or light mode.
Simply set the `mode` property either to `light` or `dark`, and that hero image
will only be displayed in light mode or dark mode respectively:

```md
> :Hero src=/img/cb-banner.svg, mode=light

> :Hero src=/img/cb-banner-dark.svg, mode=dark
```

<br>

> :Hero src=/img/cb-banner.svg, mode=light

> :Hero src=/img/cb-banner-dark.svg, mode=dark

<br><br><br>

## Careful Though ...

Do not overuse hero images, as they can be pretty heavy and time-consuming to load
for your readers. Though they do make your post pretty attractive, ultimate readability
should be your goal.

<br><br>

> :Author src=github

> :ToCPrevNext