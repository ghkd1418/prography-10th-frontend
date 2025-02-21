export const objectToFormData = (
	obj: { [key: string]: any },
	form = new FormData(),
	parentKey = '',
) => {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const formKey = parentKey ? `${parentKey}[${key}]` : key;
			if (typeof obj[key] === 'object' && obj[key] !== null) {
				objectToFormData(obj[key], form, formKey);
			} else {
				form.append(formKey, obj[key]);
			}
		}
	}
	return form;
};
