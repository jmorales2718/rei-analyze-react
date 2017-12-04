const cities = [
    {
        city: "Oakland",
        growth_from_2000_to_2013: "1.3%",
        latitude: 37.8043637,
        longitude: -122.2711137,
        population: "406253",
        rank: "1",
        usstate: "California"
    },
    {
        city: "Fremont",
        growth_from_2000_to_2013: "10.0%",
        latitude: 37.5482697,
        longitude: -121.9885719,
        population: "224922",
        rank: "2",
        usstate: "California"
    },
    {
        city: "Hayward",
        growth_from_2000_to_2013: "7.5%",
        latitude: 37.6688205,
        longitude: -122.0807964,
        population: "151574",
        rank: "3",
        usstate: "California"
    },
    {
        city: "Sunnyvale",
        growth_from_2000_to_2013: "11.9%",
        latitude: 37.36883,
        longitude: -122.0363496,
        population: "147559",
        rank: "4",
        usstate: "California"
    },
    {
        city: "Berkeley",
        growth_from_2000_to_2013: "13.3%",
        latitude: 37.8715926,
        longitude: -122.272747,
        population: "116768",
        rank: "5",
        usstate: "California"
    },
    {
        city: "San Jose",
        growth_from_2000_to_2013: "10.5%",
        latitude: 37.3382082,
        longitude: -121.8863286,
        population: "998537",
        rank: "6",
        usstate: "California"
    },
    {
        city: "San Leandro",
        growth_from_2000_to_2013: "10.3%",
        latitude: 37.7249296,
        longitude: -122.1560768,
        population: "87965",
        rank: "7",
        usstate: "California"
    },
    {
        city: "Livermore",
        growth_from_2000_to_2013: "15.1%",
        latitude: 37.6818745,
        longitude: -121.7680088,
        population: "85156",
        rank: "8",
        usstate: "California"
    },
    {
        city: "Alameda",
        growth_from_2000_to_2013: "5.4%",
        latitude: 37.7652065,
        longitude: -122.2416355,
        population: "76419",
        rank: "9",
        usstate: "California"
    },
    {
        city: "Pleasanton",
        growth_from_2000_to_2013: "15.2%",
        latitude: 37.6624312,
        longitude: -121.8746789,
        population: "74110",
        rank: "10",
        usstate: "California"
    },
    {
        city: "Union City",
        growth_from_2000_to_2013: "7.4%",
        latitude: 37.5933918,
        longitude: -122.0438298,
        population: "72528",
        rank: "11",
        usstate: "California"
    },
    {
        city: "Milpitas",
        growth_from_2000_to_2013: "11.0%",
        latitude: 37.4323341,
        longitude: -121.8995741,
        population: "69783",
        rank: "12",
        usstate: "California"
    },
    {
        city: "Castro Valley",
        growth_from_2000_to_2013: "7.1%",
        latitude: 37.694097,
        longitude: -122.086352,
        population: "61,388",
        rank: "13",
        usstate: "California"
    },
    {
        city: "Cupertino",
        growth_from_2000_to_2013: "14.3%",
        latitude: 37.3229978,
        longitude: -122.0321823,
        population: "60189",
        rank: "14",
        usstate: "California"
    },
    {
        city: "Dublin",
        growth_from_2000_to_2013: "70.0%",
        latitude: 37.7021521,
        longitude: -121.9357918,
        population: "52105",
        rank: "15",
        usstate: "California"
    },
    {
        city: "Gilroy",
        growth_from_2000_to_2013: "23.9%",
        latitude: 37.0057816,
        longitude: -121.5682751,
        population: "51701",
        rank: "16",
        usstate: "California"
    },
    {
        city: "Morgan Hill",
        growth_from_2000_to_2013: "19.5%",
        latitude: 37.1305012,
        longitude: -121.6543901,
        population: "40836",
        rank: "17",
        usstate: "California"
    },
    {
        city: "Campbell",
        growth_from_2000_to_2013: "4.2%",
        latitude: 37.2871651,
        longitude: -121.9499568,
        population: "40584",
        rank: "18",
        usstate: "California"
    },
    {
        city: "Los Gatos",
        growth_from_2000_to_2013: "7.5%",
        latitude: 37.235808,
        longitude: -121.962375,
        population: "30,735",
        rank: "19",
        usstate: "California"
    },
    {
        city: "Los Altos",
        growth_from_2000_to_2013: "9.4%",
        latitude: 37.385218,
        longitude: -122.11413,
        population: "30,288",
        rank: "20",
        usstate: "California"
    },
    {
        city: "San Lorenzo",
        growth_from_2000_to_2013: "7.1%",
        latitude: 37.681042,
        longitude: -122.124409,
        population: "23,452",
        rank: "21",
        usstate: "California"
    },
    {
        city: "Albany",
        growth_from_2000_to_2013: "18.5%",
        latitude: 37.88687,
        longitude: -122.297748,
        population: "19,488",
        rank: "22",
        usstate: "California"
    },
    {
        city: "Stanford",
        growth_from_2000_to_2013: "3.7%",
        latitude: 37.424106,
        longitude: -122.166076,
        population: "13,809",
        rank: "23",
        usstate: "California"
    },
    {
        city: "Piedmont",
        growth_from_2000_to_2013: "2.6%",
        latitude: 37.824371,
        longitude: -122.231635,
        population: "11,236",
        rank: "24",
        usstate: "California"
    },
    {
        city: "Emeryville",
        growth_from_2000_to_2013: "63.1%",
        latitude: 37.831316,
        longitude: -122.285247,
        population: "11,227",
        rank: "25",
        usstate: "California"
    },
    {
        city: "Los Altos Hills",
        growth_from_2000_to_2013: "6.3%",
        latitude: 37.379663,
        longitude: -122.137464,
        population: "8,396",
        rank: "26",
        usstate: "California"
    },
    {
        city: "San Martin",
        growth_from_2000_to_2013: "66.1%",
        latitude: 37.084946,
        longitude: -121.610222,
        population: "7,027",
        rank: "27",
        usstate: "California"
    },
    {
        city: "Monte Soreno",
        growth_from_2000_to_2013: "1.7%",
        latitude: 37.236333,
        longitude: -121.992458,
        population: "3,542",
        rank: "28",
        usstate: "California"
    },
    {
        city: "Portola Valley",
        growth_from_2000_to_2013: "2.4%",
        latitude: 37.384107,
        longitude: -122.235244,
        population: "4,570",
        rank: "29",
        usstate: "California"
    },
    {
        city: "Sunol",
        growth_from_2000_to_2013: "-31.5%",
        latitude: 37.594378,
        longitude: -121.888568,
        population: "913",
        rank: "30",
        usstate: "California"
    }
];
export default cities;
