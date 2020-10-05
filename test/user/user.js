exports.getFullAddress = (user)=>{
    return '100 king ISB, fedral, 111';
}

exports.getFullAddressDynamic = (user)=>{
    return `${user.street}, ${user.city}, ${user.province}, ${user.postal}`;
}

exports.getFullAddressDynamicError = (user)=>{
    if(!user.street)
        return 'Invalid user';
    return `${user.street}, ${user.city}, ${user.province}, ${user.postal}`;
}