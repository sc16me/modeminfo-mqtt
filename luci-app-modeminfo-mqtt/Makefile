include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-modeminfo-mqtt
PKG_VERSION:=1.1
PKG_RELEASE:=3

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)

include $(TOPDIR)/feeds/luci/luci.mk
include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)/Default
	PKGARCH:=all
	SECTION:=utils
	CATEGORY:=Networking
	DEPENDS:=+modeminfo-mqtt
endef

define Package/$(PKG_NAME)
	$(call Package/$(PKG_NAME)/Default)
	TITLE:=luci-app-modeminfo-mqtt
endef

define Package/$(PKG_NAME)/description
	LuCI Addon for modeminfo. Sending modem readings to mqtt server.
endef

define Build/Configure
endef

define Build/Compile
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/share/luci/menu.d
	$(INSTALL_DIR) $(1)/usr/share/rpcd/acl.d
	$(INSTALL_DIR) $(1)/usr/share/ucitrack

	$(INSTALL_DIR) $(1)/www/luci-static/resources/view/modeminfo-mqtt

	$(INSTALL_DATA) ./root/usr/share/luci/menu.d/*.json $(1)/usr/share/luci/menu.d/
	$(INSTALL_DATA) ./root/usr/share/rpcd/acl.d/*.json $(1)/usr/share/rpcd/acl.d/
	$(INSTALL_DATA) ./root/usr/share/ucitrack/*.json $(1)/usr/share/ucitrack/

	$(INSTALL_DATA) ./htdocs/luci-static/resources/view/modeminfo-mqtt/*.js $(1)/www/luci-static/resources/view/modeminfo-mqtt/
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
