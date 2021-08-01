const mainColors ={
    green1:'#0BCAD4',
    dark1: '#112340',
    green2:'#edfcfd',
    dark2: '#495a75',
    dark3: '#8092af',
    grey1:'#7D8797',
    grey2: '#e9e9e9',
    grey3: '#edeef0',
    grey4:'#b1b7c2',
    blue1: '#0066cb',
    black1:'#000000',
    black2: 'rgba(0, 0, 0, 0.5)'
}

export const colors ={
    primary : mainColors.green1,
    secondary: mainColors.dark1,
    tertiary:mainColors.blue1,
    white:'white',
    black:'black',
    pudar:mainColors.grey3,
    text:{
        primary: mainColors.dark1,
        secondary:mainColors.grey1,
        menuInactive:mainColors.dark2,
        menuActive : mainColors.green1,
        subTitle : mainColors.dark3,
    },
    button:{
        primary: {
            background: mainColors.green1,
            text: 'white',
        },
        secondary:{
            background:'white',
            text:mainColors.dark1,
        },
        disable:{
            background:mainColors.grey3,
            text:mainColors.grey4,
        }
    },
    border: mainColors.grey2,
    cardLight:mainColors.green2,
    LoadingBackground:mainColors.black2
};
