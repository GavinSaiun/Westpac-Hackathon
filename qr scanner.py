import cv2
from pyzbar.pyzbar import decode
import webbrowser

def qr_code_scanner():
    # Open the webcam (0 is the default camera)
    cap = cv2.VideoCapture(0)

    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()

        # Decode the QR codes in the frame
        decoded_objects = decode(frame)

        for obj in decoded_objects:
            # Get the bounding box coordinates
            points = obj.polygon
            if len(points) > 4:
                hull = cv2.convexHull(np.array([point for point in points], dtype=np.float32))
                hull = list(map(tuple, np.squeeze(hull)))
            else:
                hull = points

            # Draw the bounding box
            n = len(hull)
            for j in range(n):
                cv2.line(frame, hull[j], hull[(j + 1) % n], (0, 255, 0), 3)

            # Display the decoded text
            decoded_text = obj.data.decode("utf-8")
            cv2.putText(frame, decoded_text, (obj.rect.left, obj.rect.top), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 0), 2)

            # Open the local website
            local_url = "http://127.0.0.1:5500/hacakathon.html"
            webbrowser.open(local_url)

        # Display the frame
        cv2.imshow('QR Code Scanner', frame)

        # Break the loop if 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the webcam and close windows
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    qr_code_scanner()
