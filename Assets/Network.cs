using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using UnityEngine;

public class Network : MonoBehaviour {
    private void Start() {
        NetworkTest();
    }

    private void NetworkTest() {
        UdpClient client = new UdpClient(5500);
        try {
            client.Connect("127.0.0.1", 5500);
            byte[] sendBytes = Encoding.ASCII.GetBytes("CLIENT SIDE Message");
            client.Send(sendBytes, sendBytes.Length);

            IPEndPoint remoteEndPoint = new IPEndPoint(IPAddress.Any, 5500);
            byte[] receiveBytes = client.Receive(ref remoteEndPoint);
            var receivedString = Encoding.ASCII.GetString(receiveBytes);

            Debug.Log($"message recieved from server: {receivedString}");
        }
        catch (Exception error) {
            Debug.Log($"Exception thrown {error.Message}");
        }
    }
}