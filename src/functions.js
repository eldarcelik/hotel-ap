// Format data retreived from API to have easier access
export const formatData = (items) => {
    let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        let room = {...item.fields, images, id};

        return room;
    });
    return tempItems;
}

// Getting list of unique values using Set() data structure
export const getUnique = (items, value) => {
    let tempArray = items.map(item => item[value])
    return [...new Set(tempArray)]
}
