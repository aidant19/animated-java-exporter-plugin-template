// @ts-ignore
import en from './lang/en.yaml'

export function loadExporter() {
	const API = AnimatedJava.API

	API.addTranslations('en', en as Record<string, string>)

	new API.Exporter({
		id: 'snavesutit:unnamed_exporter',
		name: API.translate('snavesutit.unnamed_exporter.name'),
		description: API.translate('snavesutit.unnamed_exporter.description'),
		getSettings() {
			return {
				foo: new API.Settings.CheckboxSetting({
					id: 'snavesutit:unnamed_exporter/foo',
					displayName: API.translate('snavesutit.unnamed_exporter.settings.foo'),
					description: API.translate(
						'snavesutit.unnamed_exporter.settings.foo.description'
					).split('\n'),
					defaultValue: false,
				}),
			}
		},
		settingsStructure: [
			{
				type: 'setting',
				settingId: 'snavesutit:unnamed_exporter/foo',
			},
		],
		async export(ajSettings, projectSettings, exporterSettings) {
			console.log(ajSettings, projectSettings, exporterSettings)
			await new Promise(resolve => setTimeout(resolve, 100))
		},
	})
}
