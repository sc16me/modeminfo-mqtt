include $(TOPDIR)/rules.mk

PKG_NAME:=modeminfo-mqtt
PKG_VERSION:=1.1
PKG_RELEASE:=3
PKG_MAINTAINER:=Aleksandr Danilov <sc16me@gmail.com>

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)/Default
  PKGARCH:=all
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=modeminfo-mqtt
	DEPENDS:=+modeminfo +mosquitto-client-ssl +jsonfilter
endef

define Package/$(PKG_NAME)
  $(call Package/$(PKG_NAME)/Default)
  TITLE:=modeminfo-mqtt
endef

define Package/$(PKG_NAME)/description
	Addon for modeminfo. Sending modem readings to mqtt server.
endef

define Build/Prepare
endef

define Package/$(PKG_NAME)/conffiles
/etc/config/modeminfo-mqtt
endef

define Package/$(PKG_NAME)/postrm
#!/bin/sh
rm -f /etc/config/modeminfo-mqtt
exit 0
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_CONF) ./root/etc/config/modeminfo-mqtt $(1)/etc/config/modeminfo-mqtt
	$(INSTALL_BIN) ./root/etc/init.d/modeminfo-mqtt $(1)/etc/init.d/
	$(INSTALL_BIN) ./root/usr/bin/modeminfo-mqtt $(1)/usr/bin/
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
