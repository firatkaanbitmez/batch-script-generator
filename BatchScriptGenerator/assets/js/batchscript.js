const generateButton = document.getElementById("generate-button");
const copyButton = document.getElementById("copy-button");
const downloadButton = document.getElementById("download-button");
const checkboxes = document.querySelectorAll(".checkbox-input");
const outputText = document.getElementById("output-text");
const clipboardDiv = document.querySelector(".clipboard");
const welcome = document.querySelector(".WelcomePage");
const copyClipboard = document.getElementById("copyClipboard");
// Seçilen checkbox'ları saklamak için bir dizi oluşturuyoruz
const selectedCheckboxes = [];

// Checkbox işlevlerini saklamak için bir nesne oluşturuyoruz
const checkboxFunctions = {
  "Google Chrome":
    "::Google Chrome Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Google.Chrome\n",
  "Microsoft Edge":
    "::Microsoft Edge Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Microsoft.Edge\n",
  "Mozilla Firefox":
    "::Mozilla Firefox Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Mozilla.Firefox\n",
  Opera:
    "::Opera Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Opera.Opera\n",
  OperaGX:
    "::OperaGX Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Opera.OperaGX\n",
  Brave:
    "::Brave Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Brave.Brave\n",
  "VLC Media Player":
    "::VLC Media Player Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id VideoLAN.VLC\n",
  "Windows Media Player":
    "::Windows Media Player Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9WZDNCRFJ3PT\n",
  "GOM Player":
    "::GOM Player Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id GOMLab.GOMPlayer\n",
  Winamp:
    "::Winamp Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Winamp.Winamp\n",
  "Microsoft Office":
    "::Microsoft Office Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id  Microsoft.Office\n",
  LibreOffice:
    "::LibreOffice Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id TheDocumentFoundation.LibreOffice\n",
  "WPS Office":
    "::WPS Office Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Kingsoft.WPSOffice\n",
  "Amazon Workspace":
    "::Amazon Workspace Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Amazon.WorkspacesClient\n",
  OpenOffice:
    "::OpenOffice Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Apache.OpenOffice\n",
  "Adobe Photoshop":
    "::Adobe Photoshop Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id XPFD4T9N395QN6\n",
  "Adobe Lightroom":
    "::Adobe Lightroom Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id XPDP264X2DK8NB\n",
  "Paint.NET":
    "::Paint.NET Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id dotPDNLLC.paintdotnet\n",
  Canva:
    "::Canva Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Canva.Canva\n",
  "Microsoft Clipchamp":
    "::Microsoft Clipchamp Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9P1J8S7CCWWT\n",
  Spotify:
    "::Spotify Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Spotify.Spotify\n",
  Netflix:
    "::Netflix Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9WZDNCRFJ3TJ\n",
  YouTube:
    "::YouTube Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9P2901QBLQ1T\n",
  "Amazon Prime Video":
    "::Amazon Prime Video Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9P6RC76MSMMJ\n",
  "Apple Music":
    "::Apple Music Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9PFHDD62MXS1\n",
  WhatsApp:
    "::WhatsApp Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id WhatsApp.WhatsApp\n",
  Discord:
    "::Discord Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Discord.Discord\n",
  Skype:
    "::Skype Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id  Microsoft.Skype\n",
  "Microsoft Teams":
    "::Microsoft Teams Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Microsoft.Teams\n",
  Telegram:
    "::Telegram Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Telegram.TelegramDesktop\n",
  Zoom: "::Zoom Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id   Zoom.Zoom\n",
  Dropbox:
    "::Dropbox Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Dropbox.Dropbox\n",
  "Google Drive":
    "::Google Drive Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Google.Drive\n",
  "Microsoft OneDrive":
    "::Microsoft OneDrive Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Microsoft.OneDrive\n",
  iCloud:
    "::iCloud Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9PKTQ5699M62\n",
  Mega: "::Mega Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Mega.MEGASync\n",
  "Bitdefender Antivirus":
    "::Bitdefender Antivirus Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Bitdefender.Bitdefender\n",
  "Norton Secure VPN":
    "::Norton Secure VPN Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id XP88VQCQK23NX6\n",
  "Avast Antivirus":
    "::Avast Antivirus Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id XPDNZJFNCR1B07\n",
  "ESET NOD32 Antivirus":
    "::ESET NOD32 Antivirus Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id XP9KF40VGV9PWM\n",
  Malwarebytes:
    "::Malwarebytes Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Malwarebytes.Malwarebytes\n",
  Steam:
    "::Steam Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Valve.Steam\n",
  "Epic Games Store":
    "::Epic Games Store Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id EpicGames.EpicGamesLauncher\n",
  "Ubisoft Connect":
    "::Ubisoft Connect Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Ubisoft.Connect\n",
  "Xbox App":
    "::Xbox App Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9MV0B5HZVK9Z\n",
  "Visual Studio Code":
    "::Visual Studio Code Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Microsoft.VisualStudioCode\n",
  "Visual Studio 2022 Professional":
    "::Visual Studio 2022 Professional Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Microsoft.VisualStudio.2022.Professional\n",
  "JetBrains IntelliJ IDEA":
    "::JetBrains IntelliJ IDEA Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id JetBrains.IntelliJIDEA.Community\n",
  PyCharm:
    "::PyCharm Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id JetBrains.PyCharm.Professional\n",
  ArduinoIDE:
    "::ArduinoIDE Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9NBLGGH4RSD8\n",
  "Notepad++":
    "::Notepad++ Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Notepad++.Notepad++\n",
  Audius:
    "::Audius Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Audius.Audius\n",
  Evernote:
    "::Evernote Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id evernote.evernote\n",
  "Logitech Gaming Software":
    "::Logitech Gaming Software Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Logitech.LGS\n",
  "Logitech G HUB":
    "::Logitech G HUB Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Logitech.GHUB\n",
  "Logi Options+":
    "::Logi Options+ Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Logitech.OptionsPlus\n",
  "SteelSeries GG":
    "::SteelSeries GG Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id SteelSeries.GG\n",
  "SteelSeries Engine":
    "::SteelSeries Engine Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id SteelSeries.SteelSeriesEngine\n",
  "HyperX NGENUITY":
    "::HyperX NGENUITY Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9P1TBXR6QDCX\n",
  OBS: "::OBS Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id OBSProject.OBSStudio\n",
  StreamlabsOBS:
    "::StreamlabsOBS Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Streamlabs.StreamlabsOBS\n",
  "Streamlabs Desktop":
    "::Streamlabs Desktop Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Streamlabs.Streamlabs\n",
  "XSplit Broadcaster":
    "::XSplit Broadcaster Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id XSplit.Broadcaster\n",
  Bandicam:
    "::Bandicam Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id BandicamCompany.Bandicam\n",
  TeamViewer:
    "::TeamViewer Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id TeamViewer.TeamViewer\n",
  AnyDesk:
    "::AnyDesk Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id AnyDeskSoftwareGmbH.AnyDesk\n",
  "Chrome RD":
    "::Chrome Remote Desktop Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Google.ChromeRemoteDesktop\n",
  "RD Manager":
    "::Remote Desktop Manager Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Devolutions.RemoteDesktopManager\n",
  "Royal TS":
    "::Royal TS Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id RoyalApps.RoyalTS\n",
  Putty:
    "::Putty Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id PuTTY.PuTTY\n",
  "RealVNC VNCViewer":
    "::RealVNC VNCViewer Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id RealVNC.VNCViewer\n",
  Winrar:
    "::Winrar Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id RARLab.WinRAR\n",
  "7zip":
    "::7zip Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 7zip.7zip\n",
  PeaZip:
    "::PeaZip Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Giorgiotani.Peazip\n",
  Rufus:
    "::Rufus Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Rufus.Rufus\n",
  "Internet Download Manager":
    "::Internet Download Manager Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Tonec.InternetDownloadManager\n",
  "GeForce Experience":
    "::GeForce Experience Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Nvidia.GeForceExperience\n",
  qBittorrent:
    "::qBittorrent Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id qBittorrent.qBittorrent\n",
  CCleaner:
    "::CCleaner Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Piriform.CCleaner\n",
  CrystalDiskInfo:
    "::CrystalDiskInfo Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id CrystalDewWorld.CrystalDiskInfo\n",
  CrystalDiskMark:
    "::CrystalDiskMark Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id CrystalDewWorld.CrystalDiskMark\n",
  "Adobe Acrobat Reader DC":
    "::Adobe Acrobat Reader DC Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id Adobe.Acrobat.Reader.64-bit\n",
  "RaspberryPi Imager":
    "::RaspberryPi Imager Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id RaspberryPiFoundation.RaspberryPiImager\n",
  "Microsoft PowerAutomateDesktop":
    "::Microsoft PowerAutomateDesktopInstall \n winget install --silent --accept-package-agreements --accept-source-agreements --id Microsoft.PowerAutomateDesktop\n",
  "NuGet Package Explorer":
    "::NuGet Package Explorer Install\n winget install --silent --accept-package-agreements --accept-source-agreements --id 9WZDNCRDMDM3\n",
  "Microsoft Terminal":
    "::Microsoft Terminal Install \n winget install --silent --accept-package-agreements --accept-source-agreements --id Microsoft.WindowsTerminal\n",
  "Free Download Manager":
    "::Free Download Manager Install \n winget install --silent --accept-package-agreements --accept-source-agreements --id XPDLMKFTXTDHSD\n",
  XboxRemove:
    '::Xbox App Remove \n powershell -command "Get-AppxPackage Microsoft.GamingApp | Remove-AppxPackage"',
  "3D Builder":
    '::3D Builder Remove \n powershell -command "Get-AppxPackage *3dbuilder* | Remove-AppxPackage"',
  Sway: '::Sway Remove \n powershell -command "Get-AppxPackage *sway* | Remove-AppxPackage"',
  "Alarms & Clock":
    '::Alarms & Clock Remove \n powershell -command "Get-AppxPackage *alarms* | Remove-AppxPackage"',
  Calculator:
    '::Calculator Remove \n powershell -command "Get-AppxPackage *calculator* | Remove-AppxPackage"',
  "Calendar and Mail":
    '::Calendar and Mail Remove \n powershell -command "Get-AppxPackage *communicationsapps* | Remove-AppxPackage"',
  "Get Office":
    '::Get Office Remove \n powershell -command "Get-AppxPackage *officehub* | Remove-AppxPackage"',
  "AV1 Codec":
    '::AV1 Codec Remove \n powershell -command "Get-AppxPackage *AV1VideoExtension* | Remove-AppxPackage"',
  "VP9 Video Extensions":
    '::VP9 Video Extensions Remove \n powershell -command "Get-AppxPackage *VP9VideoExtensions* | Remove-AppxPackage"',
  "News app":
    '::News app Remove \n powershell -command "Get-AppxPackage *BingNews* | Remove-AppxPackage"',
  Weather:
    '::Weather Remove \n powershell -command "Get-AppxPackage *BingWeather* | Remove-AppxPackage"',
  Sports:
    '::Sports Remove \n powershell -command "Get-AppxPackage *bingsports* | Remove-AppxPackage"',
  "News, Sports, and Weather apps":
    '::News, Sports, and Weather apps Remove \n powershell -command "Get-AppxPackage *bing* | Remove-AppxPackage"',
  "WebP image support":
    '::WebP image support Remove \n powershell -command "Get-AppxPackage *WebpImageExtension* | Remove-AppxPackage"',
  "HEIF image support":
    '::HEIF image support Remove \n powershell -command "Get-AppxPackage *HEIFImageExtension* | Remove-AppxPackage"',
  "Music app":
    '::Music app Remove \n powershell -command "Get-AppxPackage *ZuneMusic* | Remove-AppxPackage"',
  "Movies and TV":
    '::Movies and TV Remove \n powershell -command "Get-AppxPackage *ZuneVideo* | Remove-AppxPackage"',
  "Get Help app":
    '::Get Help app Remove \n powershell -command "Get-AppxPackage *GetHelp* | Remove-AppxPackage"',
  "Voice Recorder":
    '::Voice Recorder Remove \n powershell -command "Get-AppxPackage *WindowsSoundRecorder* | Remove-AppxPackage"',
  Photos:
    '::Photos Remove \n powershell -command "Get-AppxPackage *photos* | Remove-AppxPackage"',
  "MS Office":
    '::MS Office Remove \n powershell -command "Get-AppxPackage *MicrosoftOfficeHub* | Remove-AppxPackage"',
  "Windows Camera":
    '::Windows Camera Remove \n powershell -command "Get-AppxPackage *camera* | Remove-AppxPackage"',
  "Microsoft Skype":
    '::Skype Remove \n powershell -command "Get-AppxPackage *skype* | Remove-AppxPackage"',
  Maps: '::Maps Remove \n powershell -command "Get-AppxPackage *maps* | Remove-AppxPackage"',
  "Microsoft Solitaire Collection":
    '::Microsoft Solitaire Collection Remove \n powershell -command "Get-AppxPackage *solitaire* | Remove-AppxPackage"',
  "Get Started":
    '::Get Started Remove \n powershell -command "Get-AppxPackage *getstarted* | Remove-AppxPackage"',
  OneNote:
    '::OneNote Remove \n powershell -command "Get-AppxPackage *onenote* | Remove-AppxPackage"',
  People:
    '::People Remove \n powershell -command "Get-AppxPackage *people* | Remove-AppxPackage"',
  "Your Phone Companion":
    '::Your Phone Companion Remove \n powershell -command "Get-AppxPackage *yourphone* | Remove-AppxPackage"',
  "Microsoft Store":
    '::Microsoft Store Remove \n powershell -command "Get-AppxPackage *windowsstore* | Remove-AppxPackage"',
  "Voice Recorder":
    '::Voice Recorder Remove \n powershell -command "Get-AppxPackage *soundrecorder* | Remove-AppxPackage"',
  "Screen & Sketch/Snipping tool":
    '::Screen & Sketch/Snipping tool Remove \n powershell -command "Get-AppxPackage *ScreenSketch* | Remove-AppxPackage"',
  SpotifyAB:
    '::SpotifyAB Remove \n powershell -command "Get-AppxPackage *SpotifyAB.SpotifyMusic* | Remove-AppxPackage"',
  MicrosoftEdge:
    '::Microsoft Edge Remove \n powershell -command "Get-AppxPackage *MicrosoftEdge* | Remove-AppxPackage"',
  "Teams/Chat":
    '::Teams/Chat Remove \n powershell -command "Get-AppxPackage *Teams* | Remove-AppxPackage"',
  "Microsoft To-Do":
    '::Microsoft To-Do Remove \n powershell -command "Get-AppxPackage *Todos* | Remove-AppxPackage"',
  "Sticky Notes":
    '::Sticky Notes Remove \n powershell -command "Get-AppxPackage *MicrosoftStickyNotes* | Remove-AppxPackage"',
  "Feedback Hub":
    '::Feedback Hub Remove \n powershell -command "Get-AppxPackage *WindowsFeedbackHub* | Remove-AppxPackage"',
  PowerAutomate:
    '::PowerAutomate Remove \n powershell -command "Get-AppxPackage *PowerAutomateDesktop* | Remove-AppxPackage"',
  "Xbox Game Callable":
    '::Xbox Game Callable Remove \n powershell -command "Get-AppxPackage *XboxGameCallable* | Remove-AppxPackage"',
  "Xbox Gaming Overlay":
    '::Xbox Gaming Overlay Remove \n powershell -command "Get-AppxPackage *XboxGamingOverlay* | Remove-AppxPackage"',
  "Xbox TCUI":
    '::Xbox TCUI Remove \n powershell -command "Get-AppxPackage *Xbox.TCUI* | Remove-AppxPackage"',
  "Windows Terminal":
    '::Windows Terminal Remove \n powershell -command "Get-AppxPackage *WindowsTerminal* | Remove-AppxPackage"',
  "Xbox Speech To Text Overlay":
    '::Xbox Speech To Text Overlay Remove \n powershell -command "Get-AppxPackage *XboxSpeechToTextOverlay* | Remove-AppxPackage"',
  "Xbox and all related apps":
    '::Xbox and all related apps Remove \n powershell -command "Get-AppxPackage *Xbox* | Remove-AppxPackage"',
  "MS Paint":
    '::MS Paint Remove \n powershell -command "Get-AppxPackage *Paint* | Remove-AppxPackage"',
  Notepad:
    '::Notepad Remove \n powershell -command "Get-AppxPackage *WindowsNotepad* | Remove-AppxPackage"',
  ECApp:
    '::ECApp Remove \n powershell -command "Get-AppxPackage *ECApp* | Remove-AppxPackage"',
  "Mixed Reality Portal":
    '::Mixed Reality Portal Remove \n powershell -command "Get-AppxPackage *MixedReality* | Remove-AppxPackage"',
  "Screen Sketch":
    '::Screen Sketch Remove \n powershell -command "Get-AppxPackage *ScreenSketch* | Remove-AppxPackage"',
  "Clip Champ":
    '::Clip Champ Remove \n powershell -command "Get-AppxPackage *Clipchamp* | Remove-AppxPackage"',
  "Capture Picker":
    '::Capture Picker Remove \n powershell -command "Get-AppxPackage *CapturePicker* | Remove-AppxPackage"',
  Cortana:
    '::Cortana Remove \n powershell -command "Get-AppxPackage -allusers Microsoft.549981C3F5F10 | Remove-AppxPackage"',
  "Taskbar Chat Disable":
    '::Taskbar Chat Disable \n reg add "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /f /v TaskbarMn /t REG_DWORD /d 0\n' +
    'reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Chat" /f /v ChatIcon /t REG_DWORD /d 3',
  "Taskbar Winget Disable":
    '::Taskbar Winget Disable \n reg add "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /f /v TaskbarDa /t REG_DWORD /d 0',
  "Taskbar View Disable":
    '::Taskbar View Disable \n reg add "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /f /v ShowTaskViewButton /t REG_DWORD /d 0',
  "Taskbar Search Disable":
    '::Taskbar Search Disable \n reg add "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" /f /v SearchboxTaskbarMode /t REG_DWORD /d 0',
  "Taskbar Alligenment Left":
    '::Taskbar Alligenment Left \n reg add "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" /f /v TaskbarAl /t REG_DWORD /d 0',
  "Internet Explorer path DELETE":
    '::Internet Explorer path DELETE \nReg DELETE "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\IEXPLORE.EXE" /f',
  "OneDrive DELETE":
    "::OneDrive DELETE \n taskkill /f /im OneDrive.exe\nC:\\Windows\\SysWOW64\\OneDriveSetup.exe /uninstall",
  "Power settings Addded Ultimate Performance":
    "::Power settings Addded Ultimate Performance \n powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61",
  "Power Ultimate Set and PowerSleep Zero":
    "::Power Ultimate Set and PowerSleep Zero \n powercfg -S e9a42b02-d5df-448d-aa00-03f14749eb61\npowercfg /change -monitor-timeout-ac 0\npowercfg /change -monitor-timeout-dc 0\npowercfg /change -standby-timeout-ac 0\npowercfg /change -standby-timeout-dc 0\npowercfg /change -hibernate-timeout-ac 0\npowercfg /change -hibernate-timeout-dc 0",
  "Background Color Change BLACK":
    '::Background Color Change BLACK \n reg add "HKEY_CURRENT_USER\\Control Panel\\Desktop" /v WallPaper /t REG_SZ /d " " /f\nreg add "HKEY_CURRENT_USER\\Control Panel\\Colors" /v Background /t REG_SZ /d "0 0 0" /f\nRUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters\ntaskkill /f /im explorer.exe\nexplorer.exe',
  "Background APPLICATION DISABLE":
    "::Background APPLICATION DISABLE \n Reg Add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\BackgroundAccessApplications /v GlobalUserDisabled /t REG_DWORD /d 1 /f",
  "Transparency Effect DISABLE":
    "::Transparency Effect DISABLE \n Reg Add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize /v EnableTransparency /t REG_DWORD /d 0 /f",
  "XBOX GAMEDVR DISABLE":
    '::XBOX GAMEDVR DISABLE \n reg.exe add "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\GameDVR" /v "AppCaptureEnabled" /t REG_DWORD /d "0" /f',
  Windows_11_Change_OldContextMenu:
    '::Windows_11_Change_OldContextMenu \n reg add "HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32" /f /ve\ntaskkill /f /im explorer.exe\nexplorer.exe',
  "Windows Defender Enable":
    '::Windows Defender Enable \n Reg.exe delete "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v "DisableRealtimeMonitoring" /f\nReg.exe add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /f',
  "Windows Defender Disable":
    '::Windows Defender Disable \n Reg.exe add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows Defender\\Real-Time Protection" /v "DisableRealtimeMonitoring" /t REG_DWORD /d "1" /f',
  Enable_Windows_Search_on_taskbar_and_Start_menu_for_all_users:
    '::Enable_Windows_Search_on_taskbar_and_Start_menu_for_all_users \n reg add "HKLM\\SOFTWARE\\Microsoft\\PolicyManager\\default\\Search" /v "DisableSearch" /t REG_DWORD /d 0 /f\nreg delete "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v "DisableSearch" /f',
  Disable_Windows_Search_on_taskbar_and_Start_menu_for_all_users:
    '::Disable_Windows_Search_on_taskbar_and_Start_menu_for_all_users \n reg add "HKLM\\SOFTWARE\\Microsoft\\PolicyManager\\default\\Search" /v "DisableSearch" /t REG_DWORD /d 1 /f\nreg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v "DisableSearch" /t REG_DWORD /d 1 /f',
  "Prefetch Klasör Temizle":
    "::Prefetch Klasör Temizle\n rd /s /q %prefetch%\n mkdir %prefetch%\n rd /s /q c:\\windows\\prefetch\\ \n mkdir c:\\windows\\prefetch\\",
  "Temp Klasör Temizle":
    "::Temp Klasör Temizle \n rd /s /q %temp% \n mkdir %temp% \n rd /s /q c:\\windows\\temp\\ \n mkdir c:\\windows\\temp\\ \n",
  "ALL SYSTEM CLEANER":
    '::ALL SYSTEM CLEANER \n powershell.exe -command "cleanmgr /sagerun:1 | out-Null" \n RD /S /Q %SystemDrive%windows.old \n rd /s /q %SYSTEMDRIVE%$Recycle.bin \n del /f /s /q %systemdrive%*.tmp  \n del /f /s /q %systemdrive%*.old  \n',
};

// Her bir checkbox için olay dinleyicisi ekliyoruz
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      // Checkbox işaretlendiğinde, seçilenCheckboxes dizisine ekliyoruz
      const label = this.parentElement.textContent.trim();
      selectedCheckboxes.push(label);
    } else {
      // Checkbox işareti kaldırıldığında, seçilenCheckboxes dizisinden çıkarıyoruz
      const label = this.parentElement.textContent.trim();
      const index = selectedCheckboxes.indexOf(label);
      if (index !== -1) {
        selectedCheckboxes.splice(index, 1);
      }
    }
  });
});

// "Kodu Oluştur" düğmesine tıklanınca seçilen checkbox'ları göster
generateButton.addEventListener("click", function () {
  let output = `@echo off

:: run as admin check
net session >nul 2>&1
if %errorLevel% neq 0 (
    color 04
    cls
    echo.
    echo     PLEASE RUN CMD AS ADMINISTRATOR
    echo     LUTFEN CMD'yi YONETICI OLARAK CALISTIRIN
    echo.
    pause
    exit
)

title C.By ARTHUR
color 0A
cls

::Welcome\n `;

  selectedCheckboxes.forEach((label) => {
    output += checkboxFunctions[label] + "\n";
  });

  // Oluşturulan kodu "copyClipboard" alanına yazdırın
  const copyClipboard = document.getElementById("copyClipboard");
  copyClipboard.value = output;
});

// "Kodu ZIP Olarak İndir" düğmesine tıklanınca kodları ZIP olarak indir
downloadButton.addEventListener("click", function () {
  let zip = new JSZip();
  let outputText = document.getElementById("copyClipboard").value;

  zip.file("script.bat", outputText);

  zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, "script.zip");
  });
});

//"Copy button"
function copy() {
  let copyText = document.getElementById("copyClipboard");
  let copySuccess = document.getElementById("copied-success");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  copySuccess.style.opacity = "1";
  setTimeout(function () {
    copySuccess.style.opacity = "0";
  }, 500);
}

// Radio düğmelerini ve ilgili checkbox'ları alın
const welcomeRadio = document.getElementById("Welcome");
const windowsRadio = document.getElementById("Windows");
const systemRadio = document.getElementById("System");
const fixedRadio = document.getElementById("Fixed");
const uninstallRadio = document.getElementById("Uninstall");
const installRadio = document.getElementById("Install");
const endRadio = document.getElementById("End");

const windowsCheckboxes = document.getElementById("windows-checkboxes");
const systemCheckboxes = document.getElementById("system-checkboxes");
const fixedCheckboxes = document.getElementById("fixed-checkboxes");
const uninstallCheckboxes = document.getElementById("uninstall-checkboxes");
const installCheckboxes = document.getElementById("install-checkboxes");
// Sayfa yüklendiğinde sadece Windows menüsünü göster
windowsCheckboxes.style.display = "none";
systemCheckboxes.style.display = "none";
fixedCheckboxes.style.display = "none";
uninstallCheckboxes.style.display = "none";
installCheckboxes.style.display = "none";
generateButton.style.display = "none";
downloadButton.style.display = "none";
clipboardDiv.style.display = "none";

// Radio düğmelerine tıklanıldığında ilgili menüyü göster/gizle
welcomeRadio.addEventListener("change", function () {
  if (this.checked) {
    clipboardDiv.style.display = "none";
    downloadButton.style.display = "none";
    generateButton.style.display = "none";
    windowsCheckboxes.style.display = "none";
    systemCheckboxes.style.display = "none";
    fixedCheckboxes.style.display = "none";
    uninstallCheckboxes.style.display = "none";
    installCheckboxes.style.display = "none";
    welcome.style.display = "";
  }
});
// Radio düğmelerine tıklanıldığında ilgili menüyü göster/gizle
windowsRadio.addEventListener("change", function () {
  if (this.checked) {
    windowsCheckboxes.style.display = "block";
    systemCheckboxes.style.display = "none";
    fixedCheckboxes.style.display = "none";
    uninstallCheckboxes.style.display = "none";
    installCheckboxes.style.display = "none";
    clipboardDiv.style.display = "none";
    downloadButton.style.display = "none";
    generateButton.style.display = "none";
    welcome.style.display = "none";
  }
});

systemRadio.addEventListener("change", function () {
  if (this.checked) {
    windowsCheckboxes.style.display = "none";
    systemCheckboxes.style.display = "block";
    fixedCheckboxes.style.display = "none";
    uninstallCheckboxes.style.display = "none";
    installCheckboxes.style.display = "none";
    clipboardDiv.style.display = "none";
    downloadButton.style.display = "none";
    generateButton.style.display = "none";
    welcome.style.display = "none";
  }
});

fixedRadio.addEventListener("change", function () {
  if (this.checked) {
    windowsCheckboxes.style.display = "none";
    systemCheckboxes.style.display = "none";
    fixedCheckboxes.style.display = "block";
    uninstallCheckboxes.style.display = "none";
    installCheckboxes.style.display = "none";
    clipboardDiv.style.display = "none";
    downloadButton.style.display = "none";
    generateButton.style.display = "none";
    welcome.style.display = "none";
  }
});

uninstallRadio.addEventListener("change", function () {
  if (this.checked) {
    windowsCheckboxes.style.display = "none";
    systemCheckboxes.style.display = "none";
    fixedCheckboxes.style.display = "none";
    uninstallCheckboxes.style.display = "block";
    installCheckboxes.style.display = "none";
    clipboardDiv.style.display = "none";
    downloadButton.style.display = "none";
    generateButton.style.display = "none";
    welcome.style.display = "none";
  }
});

installRadio.addEventListener("change", function () {
  if (this.checked) {
    windowsCheckboxes.style.display = "none";
    systemCheckboxes.style.display = "none";
    fixedCheckboxes.style.display = "none";
    uninstallCheckboxes.style.display = "none";
    installCheckboxes.style.display = "block";
    clipboardDiv.style.display = "none";
    downloadButton.style.display = "none";
    generateButton.style.display = "none";
    welcome.style.display = "none";
  }
});
endRadio.addEventListener("change", function () {
  if (this.checked) {
    windowsCheckboxes.style.display = "none";
    systemCheckboxes.style.display = "none";
    fixedCheckboxes.style.display = "none";
    uninstallCheckboxes.style.display = "none";
    installCheckboxes.style.display = "none";
    clipboardDiv.style.display = "";
    downloadButton.style.display = "";
    generateButton.style.display = "";
    welcome.style.display = "none";
  }
});
