export const changeNameFormat = (str: string): string => {
    let nameFn = str.toLowerCase().replace(" ", "-");
    
    nameFn = nameFn.replace('/[áàãâä]/ui', 'a');
    nameFn = nameFn.replace('/[éèêë]/ui', 'e');
    nameFn = nameFn.replace('/[íìîï]/ui', 'i');
    nameFn = nameFn.replace('/[óòõôö]/ui', 'o');
    nameFn = nameFn.replace('/[úùûü]/ui', 'u');
    nameFn = nameFn.replace('/[ç]/ui', 'c');

    return nameFn;
}