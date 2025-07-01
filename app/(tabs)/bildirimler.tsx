// NotificationsScreen.js

import React, { useState } from 'react';
import { ScrollView, StyleSheet,  TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, View } from '../../components/Themed';


function BildirimIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}
interface Notification {
  id: string;
  type: string;
  text: string;
}

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'event',
      text: '26 Mart Cumartesi günü saat 15:00\'te etkinliğimize davetlisiniz.',
    },
    {
      id: '2',
      type: 'classSchedule',
      text: 'Yeni haftanın ders programı güncellendi. Değişiklikleri kontrol etmeyi unutma!',
    },
    {
      id: '3',
      type: 'menu',
      text: 'Haftanın yemek menüsü güncellendi.Göz atmayı unutma!',
    },
    // ... diğer bildirimler
  ]);

  const renderNotification = (notification: Notification) => (
    <TouchableOpacity key={notification.id} style={styles.notificationContainer} onPress={() => alert(`Detayları görüntülendi: ${notification.text}`)}>
      <View style={styles.notificationContent}>
      <FontAwesome
                    name="exclamation"
                    size={25}
                    color={"#164863"}
                    style={{ marginRight: 15,  }}
                  />
      <Text style={styles.notificationText} >{notification.text}</Text>
        
      </View>
    </TouchableOpacity>
  );

  return (
    
    
    <ScrollView style={styles.container}>
      <Text style={styles.header} >Bildirimler</Text>
      {notifications.map(renderNotification)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    
  },
  header: {
    fontSize: 24,
    textAlign:"center",
    fontWeight: 'bold',
    marginTop: 20,
    color: '#164863',
    marginBottom: 20,
    


  },
  notificationContainer: {
    borderWidth: 3,
    borderColor: '#427D9D',
    marginBottom: 10,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  notificationContent: {
    // İhtiyaca göre stil ekleyebilirsiniz
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  notificationText: {
    fontSize: 16,
    marginVertical: 5,
    marginRight: 5,
  },
});

export default NotificationsScreen;
