#!/usr/bin/env bash
# Prerequisites:
# 1. ripgrep(rust) or glyphhanger(js)
# 2. fonttools(python)

set -e
rm -rf ./static/fonts/**/*.subset.*

# for chinese chars
# https://github.com/ethantw/Han/blob/master/src/js/regex/unicode.js
rg -e '[\u4e00-\u9fff]' -oN --no-filename|sort|uniq|tr -d '\n' > glyphs-han.txt
OPTS_SUBSET_HAN='--text-file=glyphs-han.txt'

# for Hangul letters
# U+A960..U+A97F: Hangul Jamo Extended-A
# U+AC00..U+D7A3: Hangul Syllables / Korean completed words (가-힣)
# U+D7B0..U+D7FF: Hangul Jamo Extended-B
#rg -e '[\u3131-\uD79D]' -oN --no-filename|sort|uniq|tr -d '\n' > glyphs-ko.txt
#OPTS_SUBSET_KO='glyphs-ko.txt'

print_glyph_count () {
    font_file="${1}"
    # https://github.com/fonttools/fonttools/issues/1294#issuecomment-404485282
    count=$(ttx -q -o - -t GlyphOrder "${font_file}" | grep -c '<GlyphID id')
    echo "Exported ${count} glyphs to ${font_file}"
}

run_font_subsetter() {
    local font_name="$1";
    local opts="$2";
    local input_dir="./src/assets"
    local output_dir="./static/fonts"

    # OpenType
    #echo "${font_name}: Generating subset OpenType files .."
    #pyftsubset "${input_dir}/${font_name}.otf" \
    #    --output-file="${output_dir}/${font_name}.subset.otf" \
    #    --layout-features=* \
    #    --with-zopfli \
    #    "$opts"

    # WOFF
    #echo "${font_name}: Generating subset WOFF files .."
    #pyftsubset "${input_dir}/${font_name}.otf" \
    #    --flavor="woff" \
    #    --output-file="${output_dir}/${font_name}.subset.woff" \
    #    --layout-features=* \
    #    --with-zopfli \
    #    "$opts"

    # WOFF2
    echo "${font_name}: Generating subset WOFF2 files .."
    pyftsubset "${input_dir}/${font_name}.ttf" \
        --flavor="woff2" \
        --output-file="${output_dir}/${font_name}.subset.woff2" \
        --layout-features=* \
        --with-zopfli \
        "$opts"
    print_glyph_count "${output_dir}/${font_name}.subset.woff2"
}

run_font_subsetter "Iansui094-Regular" "$OPTS_SUBSET_HAN"
#run_font_subsetter "SourceHanSansTW-Regular" "$OPTS_SUBSET_HAN"
#run_font_subsetter "IBM Plex Sans KR" "$OPTS_SUBSET_KO"
rm -rf glyph*.txt

echo "Done!"
# https://hsingko.github.io/post/compress_webfont/
# https://gitlab.com/kaushalmodi/hugo-theme-refined/-/blob/master/static-src/fonts/create_font_subset.sh
# https://github.com/michaelrommel/blog/blob/main/scripts/subset_fonts.sh
# https://github.com/ruuda/blog/tree/master/fonts
# https://web.dev/fast/#optimize-webfonts
# https://github.com/black7375/font-range
# https://markoskon.com/creating-font-subsets/
