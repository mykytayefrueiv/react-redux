const defaultState = [
    {
        id: 1,
        name: 'iPhone 6s',
        cost: 100,
        category: 'phone',
        description: "Cool phone",
        thumbnail: "https://goo.gl/kVthiL"
    }, {
        id: 2,
        name: 'iPhone 7',
        cost: 300,
        category: 'phone',
        description: "Coller phone",
        thumbnail: "https://goo.gl/vUQZYY"
    }, {
        id: 3,
        name: 'iPhone 7 Plus',
        cost: 500,
        category: 'phone',
        description: "New awesome large phone",
        thumbnail: "https://goo.gl/siw9pW"
    }
]

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'UPDATE_ITEM':
            {
                debugger;
                if(!action.payload.id) {
                    return [
                        ...state, 
                        { ...action.payload.item, 
                            id: state.length + 1 
                        }];
                }
                return _.map(state, (item) => {
                    return item.id === action.payload.id
                        ? _.assign({}, item, action.payload.item)
                        : item;
                });
            }
    }
    return state;
}
