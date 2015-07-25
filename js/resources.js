game.resources = [

    /* Graphics.
     * @example
     * {name: "example", type:"image", src: "data/img/example.png"},
     */
    {name: "tileset",         type:"image",   src: "data/img/tileset.png"},
    {name: "atascii",         type:"image",   src: "data/img/atascii_24px.png"},
    {name: "background",      type:"image",   src: "data/img/background.png"},


    /* Maps.
     * @example
     * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
     * {name: "example01", type: "tmx", src: "data/map/example01.json"},
     */
    {name: "map1",            type: "tmx",    src: "data/map/map1.tmx"},
    {name: "map2",            type: "tmx",    src: "data/map/map2.json"},


    /* Tilesets.
     * @example
     * {name: "example01", type: "tsx", src: "data/map/example01.tsx"},
     */
    {name: "tileset",         type: "tsx",    src: "data/map/tileset.tsx"},


    /* Atlases
     * @example
     * {name: "example_tps", type: "json", src: "data/img/example_tps.json"},
     */
    // texturePacker
    {name: "texture",         type: "json",   src: "data/img/texture.json"},
    {name: "texture",         type: "image",  src: "data/img/texture.png"}
    // ShoeBox
    //{name: "texture",         type: "json",   src: "data/gfx/shoebox.json"},
    //{name: "texture",         type: "image",  src: "data/gfx/shoebox.png"}

];