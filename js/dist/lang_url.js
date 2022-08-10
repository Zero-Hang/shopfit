/*默认语言*/
i18n("[i18n]", {
	defaultLang: 'cn', // 设置默认语言，
	filePath: "../public/i18n/",
	filePrefix: "i18n_",
	fileSuffix: "",
	forever: true, // 默认为 true  保存当前语言，设置为 false 后，每次刷新都为cn 
	get: true,
	only: ['value', 'html', 'placeholder',
		'title'
	], // 全局设置i18n-only，默认值：['value', 'html', 'placeholder', 'title']
	callback: function() {
		//console.log("初始化语言");
	}
});
$('.chinese').click(function() {
	i18n("[i18n]", {
		lang: "cn", // 变更语言
		filePath: "../public/i18n/",
		get: true
	});
})

$('.english').click(function() {
	i18n("[i18n]", {
		lang: "en",
		filePath: "../public/i18n/",
		get: true
	})
})
