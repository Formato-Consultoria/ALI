export const convertStringToSlug = (str: string): string => 
		str.trim()
		.toLowerCase()
	    .replace(/[áàãâä]/g, 'a')
		.replace(/[éèêë]/g, 'e')
		.replace(/[íìîï]/g, 'i')
		.replace(/[óòõôö]/g, 'o')
		.replace(/[úùûü]/g, 'u')
		.replace(/[ç]/g, 'c')
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]+/g, '');