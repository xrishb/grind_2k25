<!-- markdown: is a lightweight markup language that we can use to add formatting to plaintext documents 

   markdownfile -> markdownapp -> html -> rendered output

   valid file extensions
   ___________________

   name.md
   name.markdown

-->
<!-- heading 1 '#' -->
# Markdown

## heading 2

### heading3

#### heading 4

##### heading 5

###### heading 6

<!-- to create paragraphs use blank lines to break lines or insert 2 whitespaces after a sentence/para end -->
this is a paragraph in markdown we can break lines by inserting a blank line after one paragraph ends.

this is second paragraph.  
and this is the third line after inserting 2 whitespaces/trailing spaces.

<!-- make text bold using **text** -->
this is a **bold** text.

<!-- single asterisk * for italic text -->
this is an *italic* text.

<!-- bold and italic at the same time -->
this text is ***bold and italic***.

<!-- blockquote: use '>' to create blockquote -->
> this is going to be a blockquote.
>
> this is another blockquote.

<!-- nested block quote -->
> this is a
>> nested blockquote
>>> and even more ***nested*** blockquote

<!-- we can use other elements such as bold, italic, heading in blockquotes as well -->

<!-- lists -->
<!-- ordered list -->
1. first
2. second
3. third
4. fourth

<!-- numeric values dont matter but its not okay, and the ordered list should start from 1 -->

<!-- unordered list -->
- first
- second
- third
- fourth
  - fifth

<!-- we can also nest lists, we can use \ to escape the period. other ways for unorderd is to use + or * symbols -->

<!-- code: use `code` to denote code -->
`#include <iostream>`

<!-- horizontal rule: use *** or --- on blank line for a hr -->
---

<!-- adding title for links [title](link "hover text") -->
my fav search engine is [DUCK DUCK GO](https://duckduckgo.com "the best privacy engine")

<!-- for images use ![imagepath "text"]  -->
![img](https://css-tricks.com/wp-content/uploads/2016/01/choose-markdown.jpg "markdown image")

<!-- tables : to add a table use three or more hyphens to create each column's header and use pipes to separate each col
 :--- is used for left aligning the text
 ---: for right align
 :---: for center align
-->

|syntax|description|
|---:| :---|
|int|integer data type that stores whole numbers|

<!-- fenced codeblocks using ``` -->
```json  
   {
   "firstName": user.firstName,
   "lastName" : user.lastName,
   "age" : user.age
}
```

<!-- task lists -->
- [x] this task is done
- [ ] this task is not done

<!-- basic emojis- :name: -->
this is so funny :joy:
this is a :green_heart:
im cupid :cupid:
attention :exclamation:

<!-- uncommon elements -->
<!-- subscript -->
h~2~o
<!-- superscript -->
x^23-19^

<!-- disabling url linking -->
`https://www.example.com`

<!-- heading ids useful for indexing-->
[heading id](#heading-2)

<!-- footnotes: useful for referencing and notes, ts will go to the very end of the body -->
also check this stuff[^stuff], and also this [^stuff2].

[^stuff]: this is complete shit and footnotes is just making reference point just like this, we can also return from footnote to backwards direction.

[^stuff2]: another foot note tho.

~~this is deleted~~
