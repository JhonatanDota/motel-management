from django_filters import rest_framework
from motel.models import ConsumableItem


class ConsumableItemFilter(rest_framework.FilterSet):
    name = rest_framework.CharFilter(lookup_expr="icontains")

    class Meta:
        model = ConsumableItem
        fields = ["name"]
