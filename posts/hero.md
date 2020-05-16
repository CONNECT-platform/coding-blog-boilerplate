<br><br>

# Hero Images

You can add hero images using `:Hero` component. Checkout the code for this page
to see for example how the above hero image was created. It is also highly recommended
to checkout the [official docs for quoted component syntax](https://codedoc.cc/docs/markdown/overview#component-syntax)
.

> [warning](:Icon) **IMPORTANT**
>
> Remember to remove all of these boilerplate pages before you publish your blog!

Anyhow this is the code that produces this hero image:

```md
> :Hero \
> src=https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1960&h=800&fit=crop&q=80
>
> Photo by [Émile Perron](https://unsplash.com/@emilep)
> on [Unsplash](https://unsplash.com)
```

<br>

> :Hero \
> src=https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1960&h=800&fit=crop&q=80, \
> target=desktop
>
> Photo by [Émile Perron](https://unsplash.com/@emilep)
> on [Unsplash](https://unsplash.com)

> :Hero \
> src=https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1280&h=800&fit=crop&q=80, \
> target=mobile
>
> Photo by [Émile Perron](https://unsplash.com/@emilep)
> on [Unsplash](https://unsplash.com)

<br>

## Captions

The content you write under a hero image is used as its caption (as in the example outlined above).
You can also have hero images without a caption:

```md
> :Hero src=https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1960&h=800&fit=crop&q=80
```

<br>

> :Hero src=https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1960&h=800&fit=crop&q=80, \
> target=desktop

> :Hero src=https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1280&h=800&fit=crop&q=80, \
> target=mobile

<br>

## Dark Mode Support

You can specify whether a hero image is to be only used for dark mode or light mode.
Simply set the `mode` property either to `light` or `dark`, and that hero image
will only be displayed in light mode or dark mode respectively:

```md
> :Hero src=https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=1960&h=800&fit=crop&q=80, \
> mode=light
>
> Photo by [Jonathan Riley](https://unsplash.com/@jonathan_christian_photography) on [Unsplash](https://unsplash.com)

> :Hero src=https://images.unsplash.com/photo-1559094522-79422598840f?w=1960&h=800&fit=crop&q=80, \
> mode=dark
>
> Photo by [Donny Jiang](https://unsplash.com/@dotnny) on [Unsplash](https://unsplash.com)
```

<br>

> :Hero src=https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=1960&h=800&fit=crop&q=80, \
> mode=light, target=desktop
>
> Photo by [Jonathan Riley](https://unsplash.com/@jonathan_christian_photography) on [Unsplash](https://unsplash.com)

> :Hero src=https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=1280&h=800&fit=crop&q=80, \
> mode=light, target=mobile
>
> Photo by [Jonathan Riley](https://unsplash.com/@jonathan_christian_photography) on [Unsplash](https://unsplash.com)

> :Hero src=https://images.unsplash.com/photo-1559094522-79422598840f?w=1960&h=800&fit=crop&q=80, \
> mode=dark, target=desktop
>
> Photo by [Donny Jiang](https://unsplash.com/@dotnny) on [Unsplash](https://unsplash.com)

> :Hero src=https://images.unsplash.com/photo-1559094522-79422598840f?w=1280&h=800&fit=crop&q=80, \
> mode=dark, target=mobile
>
> Photo by [Donny Jiang](https://unsplash.com/@dotnny) on [Unsplash](https://unsplash.com)

<br>

## Responsive Heroes

Narrow hero images look too slim on mobile phones, bulky hero images on the other hand take too much space
on desktop screens (and tablets). As a result, it is a good idea to use different image sizes for different
devices.

You can accomplish this by simply specifying `target` property on your hero images. Its value can either be
`desktop` (screens with width `1024px` or bigger) and `mobile` (screens with width `1024px` or smaller):

```md
> :Hero src=https://images.unsplash.com/photo-1588058365815-c96ac30ee30f?w=1960&h=800&fit=crop&q=80, \
> target=desktop

> :Hero src=https://images.unsplash.com/photo-1588058365815-c96ac30ee30f?w=1280&h=800&fit=crop&q=80, \
> target=mobile
```

> :Hero src=https://images.unsplash.com/photo-1588058365815-c96ac30ee30f?w=1960&h=800&fit=crop&q=80, \
> target=desktop

> :Hero src=https://images.unsplash.com/photo-1588058365815-c96ac30ee30f?w=1280&h=800&fit=crop&q=80, \
> target=mobile

<br>

## Careful Though ...

Do not overuse hero images, as they can be pretty heavy and time-consuming to load
for your readers. Though they do make your post pretty attractive, ultimate readability
should be your goal.

<br><br>

> :Author src=github

> :ToCPrevNext