module.exports = {
	port: 3000,
	adminPort: 4000,
	bodyParserLimit: '100MB',
	passwordLength: 8,
	/*mongodb: {
         url: 'mongodb://localhost:27017/MyPerfectFit',	//local
        //url : 'mongodb://localhost:27017'
		//url: 'mongodb://13.232.50.188:27017/MyPerfectFit',	//test
		// url: 'mongodb://35.154.243.131:27017/MyPerfectFit',	//live
		 user: 'sushilmyperfectfit',
		 pass: 'AjitMyperfectfit2018'
    },*/
    mongodb: {
        url: 'mongodb://localhost:27017/MyPerfectFit',	//local
       //url : 'mongodb://localhost:27017'
       //url: 'mongodb://13.232.50.188:27017/MyPerfectFit',	//test
       // url: 'mongodb://35.154.243.131:27017/MyPerfectFit',	//live
        user: '',
        pass: ''
   },
	// url:'http://13.232.3.152:3000/',
	url: 'https://myperfectfit.co.in/',
	mpfemail: 'https://myperfectfit.co.in/',
	deliveredByDays: 15,
	latestProds: 17,
	// razorPayCreds: { //test credits.
	// 	id: 'rzp_test_1GzFQM8oAy2SB4',
	// 	secret: 's83MLDgeFIhNbbhzkIo8BJBl'
	// },
	razorPayCreds: { //live credits.
	   id: 'rzp_live_b0QHv1mxIL2uZp',
	   secret: 'Eji8JBmLiLI2PhOraB6dNUlS'
	},
	facebookAuth: {
		clientID: '1299452453415231', // your App ID
		clientSecret: '50fbe3f48dab3c7eaac41817c1ee238a', // your App Secret
		callbackURL: 'https://myperfectfit.co.in/login/facebook/return'
		// callbackURL: 'http://localhost:3000/login/facebook/return'
    },
    googleAuth: {
        clientID: '146363366005-hoh63ff06deefu487qjgsqaqpv63pf4k.apps.googleusercontent.com', // your App ID
        clientSecret: '_Nhwt2DUb2LvIkERGUytfKB0', // your App Secret
        callbackURL: 'https://myperfectfit.co.in/login/google/return'
            // callbackURL: 'http://localhost:3000/login/google/return'
    },
    linkedinAuth: {
        clientID: '7823aghnc2b45j',
        clientSecret: 'sBjeGNVjE5guR4ts',
        callbackURL: 'https://myperfectfit.co.in/login/linkedin/return'
            // callbackURL: "http://localhost:3000/login/linkedin/return"
    },
    instagramAuth: {
        clientID: '82d6485a243144b685a635d2812dbde6',
        clientSecret: '613f5d3284634ecb9808b86373fdea96',
        callbackURL: 'https://myperfectfit.co.in/login/instagram/return'
            // callbackURL: "http://localhost:3000/login/instagram/return"
    },
    twilio: {
        fromNumber: '+19093215567',
        sid: 'AC73a2a4c09c936ec3883fbbf263f86849',
        token: 'e34ced5368e9c4ee7be9ff4f660b34de'
    },
    s3: {
        s3Bucket: 'mpf-public-data',
        s3Url: 'https://mpf-public-data.s3.ap-south-1.amazonaws.com',
        productImagesUrl: "/Images/MPFProductImages/",
        userImagesUrl: "/Images/MPFUserImages/",
        staticImagesUrl: "/Images/MPFStaticImages/",
        testimonialImagesUrl: "/Images/MPFTestimonialPics/"
    },
    // sendgridKey: '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', //uday
    sendgridKey: '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', //mpf
    jwt: {
        secret: 'MyPerfectFit@MTW@123#123'
    },
    AppointmentType: ['videoCall', 'phoneCall', 'homeVisit', 'StudioVisit'],
    Roles: ['admin', 'co-admin', 'Stylist', 'tailor', 'user', 'vendor'],
    customizeNow: ['Fit', 'Breast Type', 'Lapel Type', 'Buttons', 'Vent', 'Pocket Type',
        'Inner Lining', 'Pleaat', 'Back Pocket', 'Belt', 'Design', 'Sleeve', 'Collar', 'Cuff',
        'Button Placket', 'Pocket', 'Yoke', 'Bottom Cut', 'Bottom', 'Pyjama Type', 'chudidhar', 'Button Type'
    ],
    days: ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'],
    veinColor: ['Cool', 'Warm', 'Neutral'],
    skinColor: ['Bisque', 'Classic Beige', 'Warm Beige', 'Neutral Sand', 'True Beige', 'Golden Beige',
        'Toasted Almond', 'Honey Sand', 'Desert Sand', 'TerraCotta Sand', 'Caramel', 'Mocha'
    ],
    hairColor: ['Platinum Blonde', 'Light Blonde', 'Golden Blonde', 'Ash Blonde', 'Strawberry Blonde',
        'Reddish Blonde', 'Ash Brown Highlights', 'Medium Ash Brown', 'Frosted Brown', 'Medium Brown', 'Bronzed Brown',
        'Mahogany Brown', 'Burgundy', 'Soft Brown', 'Dark Brown', 'Jet Black'
    ],
    FacialHair: ['Clean Shaved', 'Moustache', 'Beard'],
    appStatus: ['Pending', 'Confirmed', 'Rescheduled', 'Completed'],
    loginStatus: ['WithLogin', 'WithoutLogin'],
    imageType: ['BannerImage', 'FormalImage', 'CasualImage', 'EthinicImage', 'TrendingImage'],
    productStatus: ['Pending', 'Deliverd', 'canceled'],
    measurementType: ['shirts', 'Trouser', 'Poona Pant', 'Chinos', 'Blazer', 'Tuxedo', 'Jodhpuri', 'Waist Coat', 'Sadri', 'Kurta', 'Pyjama', 'Chudidhar'],
    gender: ['male', 'female'],
    bodyShapes: ['Triangle', 'Trapezoid', 'Rectangle', 'Inverted Triangle', 'Oval'],
    faceShapes: ['Triangle', 'Round', 'Square', 'Oval', 'Diamond', 'Heart'],
    bodyProportion: ['Balanced Body', 'Long Legs,Short Torso', 'Short Legs,Long Torso'],
    eyeColor: ['Hazel', 'Light Brown', 'Dark Brown', 'Black', 'Gray', 'Green', 'Light Blue'],
    chinType: ['Single Chin', 'Double Chin'],
    fitSize: ['Small', 'Medium', 'Large', 'XL', 'XXL', 'XXXL'],
    shoeSize: ["5", "6", "7", "8", "9", "10", "11", "12"],
    shirtType: ['Slim Fit', 'Regular Fit', 'Loose/Relaxed Fit'],
    trouserType: ['Too Tight', 'Just Right', 'Too Loose'],
    ChinosType: ['Fort Chino', 'Wain Chino', 'Pipe Chino', 'Charge Chino'],
    BlazerType: ['Classic', 'Modern', 'Slim'],

    clothingStyle: ['Sober', 'Stylish', 'Bold', 'Trendy', 'Classic', 'Simple', 'Elegant', 'Flattering'],
    Perceive: ['Trustworthy', 'HardWorking', 'Sober', 'Playful', 'Fun', 'Creative', 'Bold', 'Authoritative', 'Leader'],
    lifeStyle: ['Professional', 'Adventurous', 'Religious', 'Community Clubs', 'Homemaking Tasks',
        'Entertainment', 'sports', 'Creative Fields'
    ],
    dressCode: ['Formal Wear', 'Business Casual', 'Fully Casual', 'Uniform'],
    spend: ['Up to 2000', 'Up to 3000', 'Up to 4000', 'Up to 5000', 'Up to 6000', 'Up to 7000', 'Up to 8000'],
    shoppingFrequency: ['Once in a week', 'Once in a fortnight', 'Once in a month', 'Once in a quarter',
        'Once in a halfyear', 'Once in a year', 'Not Sure'
    ],
    preference: ['Style', 'Comfort'],
    brands: ['Louis Philippe', 'arrow', 'van heusen', 'indigo nation', 'zodiac', 'Zara', 'blackberry', 'Peter England', 'park', 'Raymond', 'Allen Solly'],
    color: ['Black', 'Gray', 'Brown', 'Blue', 'Green', 'Khaki', 'Maroon', 'Cream'],
    pattern: ['Solid', 'Striped', 'Small Checks', 'Large Checks', 'Patterned', 'Plaid'],
    look: ['Office', 'Weekend', 'Party', 'Functions'],
    appointmentBeingBookedBy: ['Self', 'Family and Friends', 'Personal Stylist', 'Relationship Associate'],
    AppointmentTypeField: ['Looking for Suits', 'Looking for Shirts', 'Looking for Trousers',
        'Getting married', 'Looking for something for an upcoming occasion', 'Trial of the garments',
        'Garment to be adjusted which has been delivered',
        'Getting Married', 'Looking for something for an upcoming occassion'
    ],
    studioAddress: ['603,Riviera Apartments,Dwarakapuri Colony,Punjagutta,Hyd-500082',
        'Plot no. 97, 3rd Floor, Ayyappa Society,  Mega Hills,Madhapur, Hyderabad-500081'
    ],
    typesOfDiscounts: ['flat', 'percentage'],
    categories: ['Suits', 'Pants', 'Shirts', 'Ethnic', 'Accessories'],
    SubCategories: ['Formal', 'Stylish', 'Blazers', 'Tuxedo', 'Waist Coat', 'Formal Pant', 'Chinos', 'Courdroys', 'Formal', 'Casual', 'Partywear', 'Jodhpuris', 'Sadris', 'Kurta-pyjama', 'Indo western', 'Sherwanis', 'Designer-wear', 'Pagdis', 'Jhootis', 'Stoles', 'Brooches', "Tie & Bows", "Pocket Squares", "Cuff Links", "Belts", "Shoes", "Watches", "Wallets", "Others"],
    Suits: ['Formal', 'Stylish', 'Blazers', 'Tuxedo', 'Waist Coat'],
    Pants: ['Formal Pant', 'Chinos', 'Courdroys'],
    Shirts: ['Formal', 'Casual', 'Partywear'],
    Ethnic: ['Jodhpuris', 'Sadris', 'Kurta-pyjama', 'Indo western', 'Sherwanis', 'Designer-wear', 'Pagdis', 'Jhootis', 'Stoles', 'Brooches'],
    Accessories: ["Tie & Bows", "Pocket Squares", "Cuff Links", "Belts", "Shoes", "Watches", "Wallets", "Others"],
    measurementsTypes: ['standard', 'custom'],
    reportStatus: ['Pending', 'Added', 'Approved', 'Rejected'],
    orderStatus: ['Order Placed', 'Dispatched', 'Delivered'],
    adminEmail: 'ajit@myperfectfit.co.in',
    adminEmail1: 'reachus@myperfectfit.co.in',
    appointmentIdPrefix: 'APID1',
    orderIdPrefix: 'MPF1',
    productIdPrefix: 'PD1'
};
