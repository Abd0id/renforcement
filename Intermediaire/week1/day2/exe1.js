function fusionProfonde(obj1, obj2) {
    const result = { obj1 };

    for (const key in obj2) {
        if (isObjet(obj1[key]) && isObjet(obj2[key])) {
            result[key] = fusionProfonde(obj1[key], obj2[key]);
        } else {
            result[key] = obj2[key];
        }
    }

    return result;
}

function isObjet(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}


