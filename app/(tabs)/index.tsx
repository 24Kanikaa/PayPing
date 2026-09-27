import "@/global.css"
import React from "react";
import { useState } from "react";
import { Text, View,Image, FlatList } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNDSafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import ListHeading from "@/components/listHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubsciptionCards";
import SubscriptionCard from "@/components/SubscriptionCard";
const SafeAreaView = styled(RNDSafeAreaView)
export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
        <FlatList
        ListHeaderComponent={()=>(
        <>
          <View className="home-header">
          <View className="home-user">
            <Image source={images.avatar} className="home-avatar" />
            <Text className="home-user-name">{HOME_USER.name}</Text>
          </View>

          <Image source={icons.add} className="home-add-icon" />
          </View>

          <View className="home-balance-card">
              <Text className="home-balance-label">Balance</Text>

              <View className="home-balance-row">
                <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
              </View>
              <Text className="home-balance-date">
                {dayjs(HOME_BALANCE.nextRenewalDate).format("MMMM D, YYYY")}
              </Text>
          </View>

          <View className="mb-5">
              <ListHeading title="Upcoming" />
            
              <FlatList
              data={UPCOMING_SUBSCRIPTIONS}
              renderItem={({item}) => <UpcomingSubscriptionCard {...item} />  }
              keyExtractor={(item) => item.id}
              horizontal
              showhorizontalScrollIndicator={false}
              ListEmptyComponent={<Text className="home-empty-state">No upcoming renewals</Text>}
              />

          </View>

          <ListHeading title="All Subscriptions" />
       </>
        )}
        data={HOME_SUBSCRIPTIONS}
        renderItem={({item}) => <SubscriptionCard {...item}
        expanded={expandedSubscriptionId === item.id}
        onPress={() => setExpandedSubscriptionId((currentId)=>(currentId === item.id ? null : item.id))}
         />  }
         keyExtractor={(item) => item.id}
         ListEmptyComponent={<Text className="home-empty-state">No subscriptions found</Text>}
        
         extraData={expandedSubscriptionId}
        ItemSeparatorComponent={() => <View className="h-4" />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text className="home-empty-state">No subscriptions yet.</Text>}
        contentContainerClassName="pb-30"
        />
    </SafeAreaView>
  );
}