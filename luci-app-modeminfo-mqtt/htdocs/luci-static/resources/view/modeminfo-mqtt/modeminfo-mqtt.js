'use strict';
'require form';
'require uci';
'require view';

var discovery = _('Needed for automatic detection in HomeAssistant.');

return view.extend({
	load: function () {
		return uci.load('modeminfo-mqtt');
	},

	render: function (data) {
		let conf = 'modeminfo-mqtt';
		let m, s, o;

		m = new form.Map(conf, _('MQTT metrics addon'), 
			_('An addon that sends modem metrics to the MQTT server.')
		);

		s = m.section(form.TypedSection, 'modeminfo-mqtt', _('Settings'));
		s.anonymous = true;
		s.addremove = false;

		o = s.option(form.Flag, 'enabled', _('Service Enabled'));
		o.default = '0';
		o.rmempty = false;

		o = s.option(form.Value, 'server', _('MQTT server address'));
		o.placeholder = 'localhost';
		o.rmempty = false;

		o = s.option(form.Value, 'port', _('MQTT server port'));
		o.datatype = 'port';
		o.placeholder = '1883';
		o.rmempty = false;

		o = s.option(form.Value, 'login', _('MQTT login'));
		o.placeholder = 'mqtt';
		o.rmempty = false;

		o = s.option(form.Value, 'pass', _('MQTT password'));
		o.password = true;
		o.placeholder = 'secret';
		o.rmempty = false;

		o = s.option(form.Flag, 'discovery', _('Enable device discovery'), discovery);
		o.default = '0';
		o.rmempty = false;

		o = s.option(form.ListValue, 'timeout', _('Update interval'));
		o.default = '60';
		o.rmempty = false;

		o.value('60',  _('1 minute'));
		o.value('300', _('5 minutes'));
		o.value('600', _('10 minutes'));
		o.value('900', _('15 minutes'));

		return m.render();
	}
});