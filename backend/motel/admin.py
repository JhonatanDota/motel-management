from django.contrib import admin
from motel.models import Accommodation, Room, ConsumableItem


class AccommodationAdmin(admin.ModelAdmin):
    pass


class RoomAdmin(admin.ModelAdmin):
    pass


class ConsumableItemAdmin(admin.ModelAdmin):
    pass


admin.site.register(Accommodation, AccommodationAdmin)
admin.site.register(Room, RoomAdmin)
admin.site.register(ConsumableItem, ConsumableItemAdmin)
