import { ColumnOptionsProps } from "components/Grid/type.d";

export const DATA = [
  {
    name: "Beautiful Lies",
    artist: "Birdy",
    typeCode: "1",
    genreCode: "1",
    grade: "2",
  },
  {
    name: "X",
    artist: "Ed Sheeran",
    typeCode: "1",
    genreCode: "1",
    grade: "3",
  },
  {
    name: "Moves Like Jagger",
    artist: "Maroon5",
    typeCode: "3",
    genreCode: "1,2",
    grade: "2",
  },
  {
    name: "A Head Full Of Dreams",
    artist: "Coldplay",
    typeCode: "1",
    genreCode: "2",
    grade: "3",
  },
  {
    name: "21",
    artist: "Adele",
    typeCode: "1",
    genreCode: "1,3",
    grade: "3",
  },
  {
    name: "Warm On A Cold Night",
    artist: "HONNE",
    typeCode: "1",
    genreCode: "3,4",
    grade: "2",
  },
  {
    name: "Take Me To The Alley",
    artist: "Gregory Porter",
    typeCode: "1",
    genreCode: "5",
    grade: "3",
  },
  {
    name: "Make Out",
    artist: "LANY",
    typeCode: "2",
    genreCode: "4",
    grade: "2",
  },
  {
    name: "Get Lucky",
    artist: "Daft Punk",
    typeCode: "3",
    genreCode: "1,5",
    grade: "3",
  },
  {
    name: "Valtari",
    artist: "Sigur Rós",
    typeCode: "3",
    genreCode: "2",
    grade: "3",
  },
  {
    name: "Bush",
    artist: "Snoop Dogg",
    typeCode: "2",
    genreCode: "5",
    grade: "3",
  },
  {
    name: "2",
    artist: "Beyoncé",
    typeCode: "1",
    genreCode: "1",
    grade: "3",
  },
  {
    name: `I Won't Give Up`,
    artist: "Jason Mraz",
    typeCode: "3",
    genreCode: "1",
    grade: "2",
  },
  {
    name: "Following My Intuition",
    artist: "Craig David",
    typeCode: "1",
    genreCode: "3,4",
    grade: "3",
  },
  {
    name: "Blue Skies",
    artist: "Lenka",
    typeCode: "3",
    genreCode: "1,2",
    grade: "3",
  },
  {
    name: "This Is Acting",
    artist: "Sia",
    typeCode: "2",
    genreCode: "1",
    grade: "3",
  },
  {
    name: "Blurryface",
    artist: "Twenty One Pilots",
    typeCode: "2",
    genreCode: "2",
    grade: "2",
  },
  {
    name: `I'm Not The Only One`,
    artist: "Sam Smith",
    typeCode: "3",
    genreCode: "1,3",
    grade: "2",
  },
  {
    name: "The Magic Whip",
    artist: "Blur",
    typeCode: "2",
    genreCode: "2",
    grade: "3",
  },
  {
    name: "Chaos And The Calm",
    artist: "James Bay",
    typeCode: "2",
    genreCode: "1,2",
    grade: "3",
  },
];

export const COLUMN_META: ColumnOptionsProps = [
  {
    header: "Name",
    name: "name",
    editor: {
      type: "text",
    },
    validation: {
      required: true,
    },
  },
  {
    header: "Artist",
    name: "artist",
    editor: {
      type: "text",
      options: {
        maxLength: 10,
      },
    },
  },
  {
    header: "Type",
    name: "typeCode",
    formatter: "listItemText",
    editor: {
      type: "select",
      options: {
        listItems: [
          { text: "Deluxe", value: "1" },
          { text: "EP", value: "2" },
          { text: "Single", value: "3" },
        ],
      },
    },
  },
  {
    header: "Genre",
    name: "genreCode",
    formatter: "listItemText",
    editor: {
      type: "checkbox",
      options: {
        listItems: [
          { text: "Pop", value: "1" },
          { text: "Rock", value: "2" },
          { text: "R&B", value: "3" },
          { text: "Electronic", value: "4" },
          { text: "etc.", value: "5" },
        ],
      },
    },
  },
  {
    header: "Grade",
    name: "grade",
    copyOptions: {
      useListItemText: true,
    },
    formatter: "listItemText",
    editor: {
      type: "radio",
      options: {
        listItems: [
          { text: "★☆☆", value: "1" },
          { text: "★★☆", value: "2" },
          { text: "★★★", value: "3" },
        ],
      },
    },
  },
];
